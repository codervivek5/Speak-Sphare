import os
import sys
import psycopg2
from urllib.parse import urlparse, unquote
from dotenv import load_dotenv

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
load_dotenv()

db_url = os.getenv("DATABASE_URL", "")
if db_url and db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

parsed = urlparse(db_url)
user = parsed.username
password = unquote(parsed.password) if parsed.password else None
host = parsed.hostname
port = parsed.port or 5432
dbname = parsed.path.lstrip("/")

try:
    conn = psycopg2.connect(
        dbname=dbname,
        user=user,
        password=password,
        host=host,
        port=port
    )
    conn.autocommit = True
    cursor = conn.cursor()
    # Reset course sequence
    cursor.execute("SELECT setval(pg_get_serial_sequence('course', 'id'), coalesce(max(id), 1), max(id) IS NOT null) FROM course;")
    print("Course seq reset:", cursor.fetchone())
    
    # Reset userprofile sequence
    cursor.execute("SELECT setval(pg_get_serial_sequence('userprofile', 'id'), coalesce(max(id), 1), max(id) IS NOT null) FROM userprofile;")
    print("UserProfile seq reset:", cursor.fetchone())
    
    # Reset userprogress sequence
    cursor.execute("SELECT setval(pg_get_serial_sequence('userprogress', 'id'), coalesce(max(id), 1), max(id) IS NOT null) FROM userprogress;")
    print("UserProgress seq reset:", cursor.fetchone())
    
    cursor.close()
    conn.close()
    print("Sequences reset successfully.")
except Exception as e:
    print(f"Error resetting sequences: {e}")
