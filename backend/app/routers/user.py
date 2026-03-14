from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from app.models.schema import UserProfile, UserProgress
from app.database import get_session
from typing import List

router = APIRouter(prefix="/user", tags=["user"])

@router.get("/profile", response_model=UserProfile)
async def get_profile(session: Session = Depends(get_session)):
    # Assuming single user for demo purposes
    profile = session.exec(select(UserProfile)).first()
    return profile

@router.get("/progress", response_model=List[UserProgress])
async def get_progress(session: Session = Depends(get_session)):
    progress_records = session.exec(select(UserProgress)).all()
    return progress_records

