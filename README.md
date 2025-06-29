# car-webapp — ระบบจัดการข้อมูลรถยนต์

โปรเจกต์นี้เป็นเว็บแอปพลิเคชันสำหรับแสดงรายการรถยนต์ พร้อมสามารถเพิ่มข้อมูลรถยนต์ใหม่ และแสดงข้อมูลนักศึกษา

## คุณสมบัติ

- หน้าแสดงข้อมูลนักศึกษา (Profile)
- หน้ารายการรถยนต์ (Car Catalog)
- เพิ่มข้อมูลรถใหม่ พร้อมอัปโหลดรูป
- ใช้ React (frontend) + FastAPI + PostgreSQL (backend)
- รันได้ทั้งแบบ Docker และแบบ local

---

## วิธีติดตั้งและใช้งาน

### วิธีที่ 1: รันด้วย Docker

> สำหรับผู้ใช้งานที่ต้องการเปิดระบบได้ทันที

```bash
# Clone โปรเจกต์
git clone https://github.com/ARRUKlib/car-webapp.git
cd car-webapp

# สั่ง build และ run ระบบทั้งหมด
sudo docker-compose up --build
```

เมื่อรันเสร็จแล้ว เปิดเบราว์เซอร์ไปที่:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:8000/cars](http://localhost:8000/cars)

---

## ตัวอย่างหน้าจอ

### หน้าโปรไฟล์นักศึกษา
แสดงข้อมูลและรูปภาพของนักศึกษา พร้อมปุ่มไปยัง Car Catalog

### หน้า Car Catalog
- ดูรายการรถทั้งหมด
- เพิ่มข้อมูลรถใหม่ (Brand, Model, Year และรูป)

---

## โครงสร้างโปรเจกต์

```
car-webapp/
├── backend/           # FastAPI backend + static images
├── frontend/          # React (Vite)
│   └── public/        # รูปภาพหน้าโปรไฟล์
├── docker-compose.yml
└── README.md
```

---

## ผู้พัฒนา

| ชื่อ                      | รหัสนักศึกษา |
|---------------------------|---------------|
| Apichaya Sukcharoen       | 67130388      |
| Arruk Libnoy           | 66130503      |

---

## หมายเหตุ

- โฟลเดอร์ `frontend/public/` เก็บรูปนักศึกษา
- โฟลเดอร์ `backend/static/` เก็บรูปภาพรถยนต์
