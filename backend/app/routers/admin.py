import os
from fastapi import APIRouter, HTTPException, Depends, Header
from typing import List, Optional
from sqlmodel import Session, select
from app.models.schema import Course, UserProfile, UserProgress
from app.database import get_session

router = APIRouter(prefix="/admin", tags=["admin"])

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "")


def require_admin(x_admin_email: Optional[str] = Header(None)):
    """
    Minimal header-based admin guard.
    In a full auth system this would verify a signed JWT / session token.
    For now it checks that the caller provides the correct admin email via
    the X-Admin-Email request header.
    """
    if not ADMIN_EMAIL:
        raise HTTPException(
            status_code=500,
            detail="Server misconfiguration: ADMIN_EMAIL is not set."
        )
    if x_admin_email != ADMIN_EMAIL:
        raise HTTPException(status_code=403, detail="Not authorized as admin.")
    return x_admin_email


@router.get("/stats")
async def get_platform_stats(session: Session = Depends(get_session)):
    """Return live platform stats from the database instead of hardcoded values."""
    courses = session.exec(select(Course)).all()
    users = session.exec(select(UserProfile)).all()
    progress_records = session.exec(select(UserProgress)).all()

    avg_progress_num = 0
    if progress_records:
        avg_progress_num = sum(p.progress for p in progress_records) / len(progress_records)
        
    total_hours = sum(u.totalHours for u in users)

    return {
        "total_learners": len(users),
        "active_courses": len(courses),
        "avg_progress": f"{int(avg_progress_num)}%",
        "learning_hours": f"{total_hours}h",
    }


@router.post("/courses", response_model=Course)
async def create_course(
    course: Course,
    session: Session = Depends(get_session),
    _admin: str = Depends(require_admin),   # ← protected
):
    session.add(course)
    session.commit()
    session.refresh(course)
    return course


@router.delete("/courses/{course_id}")
async def delete_course(
    course_id: int,
    session: Session = Depends(get_session),
    _admin: str = Depends(require_admin),   # ← protected
):
    course = session.get(Course, course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    session.delete(course)
    session.commit()
    return {"message": f"Course {course_id} deleted"}
