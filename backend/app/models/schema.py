from sqlmodel import SQLModel, Field
from sqlalchemy import Column, JSON
from typing import List, Optional

class Course(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    level: str
    duration: str
    students: int
    lessons: int
    rating: float
    description: str
    topics: List[str] = Field(default=[], sa_column=Column(JSON))
    color: str

class UserProfile(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    roles: str
    position: str
    email: str = Field(unique=True, index=True)
    phone: str
    location: str
    joinDate: str
    level: str
    totalHours: int

class UserProgress(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    progress: int
    lessons: int
    color: str
