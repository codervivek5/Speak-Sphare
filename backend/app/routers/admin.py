from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.schema import Course
from app.services.mock_data import MOCK_COURSES

router = APIRouter(prefix="/admin", tags=["admin"])

# Simulate simple email-based admin check
async def get_admin_user(email: str):
    if email != "muskansingh292001@gmail.com":
        raise HTTPException(status_code=403, detail="Not authorized as admin")
    return email

@router.get("/stats")
async def get_platform_stats():
    return {
        "total_learners": 12540,
        "active_courses": len(MOCK_COURSES),
        "avg_progress": "68%",
        "learning_hours": 45600
    }

@router.post("/courses", response_model=Course)
async def create_course(course: Course):
    # In real app, this would append to DB
    MOCK_COURSES.append(course)
    return course

@router.delete("/courses/{course_id}")
async def delete_course(course_id: int):
    # In real app, this would delete from DB
    return {"message": f"Course {course_id} deleted"}
