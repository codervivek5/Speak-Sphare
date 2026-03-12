from fastapi import APIRouter
from typing import List
from app.models.schema import Course
from app.services.mock_data import MOCK_COURSES

router = APIRouter(prefix="/courses", tags=["courses"])

@router.get("/", response_model=List[Course])
async def get_courses():
    return MOCK_COURSES

@router.get("/{course_id}", response_model=Course)
async def get_course(course_id: int):
    for course in MOCK_COURSES:
        if course.id == course_id:
            return course
    return None # Should raise 404 in real app
