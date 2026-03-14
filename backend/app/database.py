from sqlmodel import SQLModel, create_engine, Session, select
import os
from dotenv import load_dotenv
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from urllib.parse import urlparse, unquote

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    ""
)

# Fix old postgres scheme
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)


def create_database_if_not_exists(db_url: str):
    if not db_url or "postgresql://" not in db_url:
        return

    # Do not attempt to auto-create databases in production environments
    if os.getenv("ENVIRONMENT") == "production":
        return

    try:
        parsed = urlparse(db_url)

        user = parsed.username
        password = unquote(parsed.password) if parsed.password else None  # decode %40 → @
        host = parsed.hostname
        port = parsed.port or 5432
        dbname = parsed.path.lstrip("/")

        conn = psycopg2.connect(
            dbname="postgres",
            user=user,
            password=password,
            host=host,
            port=port
        )

        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()

        cursor.execute(
            "SELECT 1 FROM pg_database WHERE datname = %s", (dbname,)
        )

        exists = cursor.fetchone()

        if not exists:
            print(f"Database '{dbname}' not found. Creating...")
            cursor.execute(f"CREATE DATABASE {dbname}")
            print("Database created successfully.")

        cursor.close()
        conn.close()

    except Exception as e:
        print(f"Database auto-create failed: {e}")


if not DATABASE_URL:
    raise RuntimeError(
        "DATABASE_URL environment variable is not set. "
        "Please add it to your .env file before starting the server."
    )

create_database_if_not_exists(DATABASE_URL)

# Disable SQL echo in production to prevent credential leaks and improve performance
is_production = os.getenv("ENVIRONMENT", "development") == "production"
engine = create_engine(DATABASE_URL, echo=not is_production)


def init_db():
    if engine is None:
        raise RuntimeError("Database engine is not initialized. Check DATABASE_URL.")

    from app.models.schema import Course, UserProfile, UserProgress

    SQLModel.metadata.create_all(engine)

    with Session(engine) as session:
        if session.exec(select(Course)).first() is None:
            from app.services.mock_data import MOCK_COURSES, MOCK_USER, MOCK_PROGRESS

            for course in MOCK_COURSES:
                session.add(course)

            session.add(MOCK_USER)

            for progress in MOCK_PROGRESS:
                session.add(progress)

            session.commit()


def get_session():
    if engine is None:
        raise RuntimeError("Database engine is not initialized. Check DATABASE_URL.")
    with Session(engine) as session:
        yield session