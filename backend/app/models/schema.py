from pydantic import BaseModel
from typing import List, Optional

class Course(BaseModel):
    id: int
    title: str
    level: str
    duration: str
    students: int
    lessons: int
    rating: float
    description: str
    topics: List[str]
    color: str

class UserProfile(BaseModel):
    name: str
    roles: str
    position: str
    email: str
    phone: str
    location: str
    joinDate: str
    level: str
    totalHours: int

class UserProgress(BaseModel):
    name: str
    progress: int
    lessons: int
    color: str
