import uvicorn
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from database import Base, engine, get_db, ApplicationModel
from sqlalchemy.orm import Session

class Application(BaseModel):
    company: str

class Applications(BaseModel):
    applications: List[Application]

app = FastAPI()

Base.metadata.create_all(bind=engine)

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

@app.get("/applications", response_model=Applications)
def get_applications(db: Session = Depends(get_db)):
    apps = db.query(ApplicationModel).all()
    return Applications(applications=[Application(company=a.company) for a in apps])

@app.post("/applications", response_model=Application)
def add_application(application: Application, db: Session = Depends(get_db)):
    db_app = ApplicationModel(company=application.company)
    db.add(db_app)
    db.commit()
    db.refresh(db_app)
    return application

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    return {"status": "connected"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
