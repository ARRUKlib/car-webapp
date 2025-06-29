from fastapi import Form, File, UploadFile
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import psycopg2
import os
import uuid
import shutil

app = FastAPI()

# CORS ให้ frontend เรียก backend ได้
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # หรือระบุเฉพาะ http://192.168.1.100:3000
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files เช่น /static/toyota-corolla-2019.jpg
app.mount("/static", StaticFiles(directory="static"), name="static")

# เชื่อมต่อ PostgreSQL
DB_HOST = os.getenv("POSTGRES_HOST", "db")
DB_PORT = os.getenv("POSTGRES_PORT", "5432")
DB_NAME = os.getenv("POSTGRES_DB", "car_db")
DB_USER = os.getenv("POSTGRES_USER", "car_user")
DB_PASS = os.getenv("POSTGRES_PASSWORD", "car_pass")

def get_connection():
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASS
    )

@app.get("/cars")
def read_cars():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, brand, model, release_year, image_url FROM cars")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    # สร้าง dict ให้ frontend ใช้
    cars = [
        {
            "id": row[0],
            "brand": row[1],
            "model": row[2],
            "release_year": row[3],
            "image_url": f"http://192.168.1.100:8000{row[4]}"
        }
        for row in rows
    ]
    return cars

@app.post("/cars")
def add_car(
    brand: str = Form(...),
    model: str = Form(...),
    release_year: str = Form(...),
    image_file: UploadFile = File(...)
):
    # Save uploaded image to /static
    file_ext = os.path.splitext(image_file.filename)[1]
    unique_name = f"{uuid.uuid4().hex}{file_ext}"
    save_path = os.path.join("static", unique_name)
    
    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(image_file.file, buffer)

    # Store data in DB
    image_url = f"/static/{unique_name}"
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO cars (brand, model, release_year, image_url) VALUES (%s, %s, %s, %s) RETURNING id",
        (brand, model, release_year, image_url)
    )
    car_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        "id": car_id,
        "brand": brand,
        "model": model,
        "release_year": release_year,
        "image_url": f"http://192.168.1.100:8000{image_url}"
    }
