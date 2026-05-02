import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Application(BaseModel):
    company: str

class Applications(BaseModel):
    applications: List[Application]

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"applications": []}

@app.get("/applications", response_model=Applications)
def get_applications():
    return Applications(applications=memory_db["applications"])

@app.post("/applications", response_model=Application)
def add_application(application: Application):
    memory_db["applications"].append(application)
    return application

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)