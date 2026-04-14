from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from wordline.health import health_router
from wordline.rooms import rooms_router

app = FastAPI(title="Wordline API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter(prefix="/api")
api_router.include_router(health_router)
api_router.include_router(rooms_router)

app.include_router(api_router)
