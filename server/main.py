import uvicorn
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from database import Base, engine, init_db, get_db, ApplicationModel
from sqlalchemy.orm import Session

class Application(BaseModel):
    id: int | None = None
    company: str
    role: str | None = None
    workType: str | None = None
    location: str | None = None
    status: str | None = None
    appliedDate: str | None = None
    salaryRange: str | None = None
    notes: str | None = None

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

init_db()

@app.get("/applications", response_model=Applications)
def get_applications(db: Session = Depends(get_db)):
    apps = db.query(ApplicationModel).all()
    return Applications(applications=[
        Application(
            id=a.id, company=a.company, role=a.role, workType=a.work_type,
            location=a.location, status=a.status, appliedDate=a.applied_date,
            salaryRange=a.salary_range, notes=a.notes
        ) for a in apps
    ])

@app.post("/applications", response_model=Application)
def add_application(application: Application, db: Session = Depends(get_db)):
    db_app = ApplicationModel(
        company=application.company, role=application.role, work_type=application.workType,
        location=application.location, status=application.status, applied_date=application.appliedDate,
        salary_range=application.salaryRange, notes=application.notes
    )
    db.add(db_app)
    db.commit()
    db.refresh(db_app)
    return Application(
        id=db_app.id, company=db_app.company, role=db_app.role, workType=db_app.work_type,
        location=db_app.location, status=db_app.status, appliedDate=db_app.applied_date,
        salaryRange=db_app.salary_range, notes=db_app.notes
    )

@app.get("/applications/{application_id}", response_model=Application)
def get_application(application_id: int, db: Session = Depends(get_db)):
    db_app = db.query(ApplicationModel).filter(ApplicationModel.id == application_id).first()
    if not db_app:
        raise HTTPException(status_code=404, detail="Application not found")
    return Application(
        id=db_app.id, company=db_app.company, role=db_app.role, workType=db_app.work_type,
        location=db_app.location, status=db_app.status, appliedDate=db_app.applied_date,
        salaryRange=db_app.salary_range, notes=db_app.notes
    )

@app.put("/applications/{application_id}", response_model=Application)
def update_application(application_id: int, application: Application, db: Session = Depends(get_db)):
    db_app = db.query(ApplicationModel).filter(ApplicationModel.id == application_id).first()
    if not db_app:
        raise HTTPException(status_code=404, detail="Application not found")
    db_app.company = application.company
    db_app.role = application.role
    db_app.work_type = application.workType
    db_app.location = application.location
    db_app.status = application.status
    db_app.applied_date = application.appliedDate
    db_app.salary_range = application.salaryRange
    db_app.notes = application.notes
    db.commit()
    db.refresh(db_app)
    return Application(
        id=db_app.id, company=db_app.company, role=db_app.role, workType=db_app.work_type,
        location=db_app.location, status=db_app.status, appliedDate=db_app.applied_date,
        salaryRange=db_app.salary_range, notes=db_app.notes
    )

@app.delete("/applications/{application_id}")
def delete_application(application_id: int, db: Session = Depends(get_db)):
    db_app = db.query(ApplicationModel).filter(ApplicationModel.id == application_id).first()
    if not db_app:
        raise HTTPException(status_code=404, detail="Application not found")
    db.delete(db_app)
    db.commit()
    return {"message": "Application deleted"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    return {"status": "connected"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
