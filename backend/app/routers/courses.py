from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlmodel import Session, select
from app.models.schema import Course
from app.database import get_session

router = APIRouter(prefix="/courses", tags=["courses"])

@router.get("/", response_model=List[Course])
async def get_courses(session: Session = Depends(get_session)):
    courses = session.exec(select(Course)).all()
    return courses

@router.get("/{course_id}", response_model=Course)
async def get_course(course_id: int, session: Session = Depends(get_session)):
    course = session.get(Course, course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course

