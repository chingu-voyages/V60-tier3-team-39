from database import ApplicationModel

def test_get_applications_empty(client):
    response = client.get("/applications")
    assert response.status_code == 200
    assert response.json() == {"applications": []}

def test_get_applications_returns_all(client, db):
    db.add(ApplicationModel(company="CompanyA", role="Frontend Engineer", status="Applied"))
    db.add(ApplicationModel(company="CompanyB", role="Software Developer", status="Interview"))
    db.commit()

    response = client.get("/applications")
    assert response.status_code == 200
    data = response.json()["applications"]
    assert len(data) == 2
    assert data[0]["company"] == "CompanyA"
    assert data[1]["company"] == "CompanyB"

def test_get_application_not_found(client):
    response = client.get("/applications/999")
    assert response.status_code == 404

def test_get_application_returns_one(client, db):
    app = ApplicationModel(company="CompanyA", role="Frontend Engineer", status="Applied")
    db.add(app)
    db.commit()
    db.refresh(app)

    response = client.get(f"/applications/{app.id}")
    assert response.status_code == 200
    assert response.json()["company"] == "CompanyA"

def test_add_application_missing_required_field(client):
    response = client.post("/applications", json={})
    assert response.status_code == 422

def test_add_application_returns_created(client):
    payload = {"company": "CompanyA", "role": "Frontend Engineer", "status": "Applied"}
    response = client.post("/applications", json=payload)
    assert response.status_code == 200
    assert response.json()["company"] == "CompanyA"

