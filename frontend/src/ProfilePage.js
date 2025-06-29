import React from 'react';
import './App.css';

function ProfilePage() {
  return (
    <div className="App" style={{ padding: '30px' }}>
      {/* ข้อมูลคนที่ 1 */}
      <div className="card" style={cardStyle}>
        <h1>Apichaya Sukcharoen</h1>
        <h2>รหัสนักศึกษา: 67130388</h2>
        <img
          src="/myphoto.jpg"
          alt="Apichaya Sukcharoen"
          style={imageStyle}
        />
      </div>

      <br />

      {/* ข้อมูลคนที่ 2 */}
      <div className="card" style={cardStyle}>
        <h1>ชื่อ: อารักษ์ ลิบน้อย</h1>
        <h2>รหัสนักศึกษา: 66130503</h2>
        <img
          src="/8126827f-0ebb-4682-88b0-cfb366a8ffb2.png"
          alt="รูปนักศึกษา"
          style={imageStyle}
        />
      </div>

      <br />

      <a href="/cars">
        <button style={buttonStyle}>ไปยังหน้า Car Catalog</button>
      </a>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  maxWidth: '500px',
  margin: '0 auto',
  textAlign: 'center',
};

const imageStyle = {
  width: '250px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  marginTop: '20px',
};

const buttonStyle = {
  marginTop: '30px',
  padding: '10px 20px',
  fontSize: '16px',
};

export default ProfilePage;
