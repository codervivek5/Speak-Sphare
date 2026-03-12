from fastapi import APIRouter
from app.models.schema import UserProfile, UserProgress
from app.services.mock_data import MOCK_USER, MOCK_PROGRESS
from typing import List

router = APIRouter(prefix="/user", tags=["user"])

@router.get("/profile", response_model=UserProfile)
async def get_profile():
    return MOCK_USER

@router.get("/progress", response_model=List[UserProgress])
async def get_progress():
    return MOCK_PROGRESS
