from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import alzheimer, pneumonia

app = FastAPI(
    title="RPL",
    version="1.0",
    description="A simple api server",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

app.include_router(router=alzheimer.router, prefix="/alzheimer")
app.include_router(router=pneumonia.router, prefix="/pneumonia")