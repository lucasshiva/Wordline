from fastapi import APIRouter
from pydantic import BaseModel
from ulid import ULID

rooms_router = APIRouter(prefix="/rooms", tags=["rooms"])

class RoomResponse(BaseModel):
    id: str

@rooms_router.post("", response_model=RoomResponse)
async def create_room():
    # Use ULID to generate a unique, sortable ID
    room_id = str(ULID())
    return RoomResponse(id=room_id)
