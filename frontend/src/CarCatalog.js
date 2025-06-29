import React, { useEffect, useState } from 'react';
import './App.css';

function CarCatalog() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    release_year: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const API_URL = 'http://localhost:8000/cars';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddCar = () => {
    if (!imageFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("brand", newCar.brand);
    formData.append("model", newCar.model);
    formData.append("release_year", newCar.release_year);
    formData.append("image_file", imageFile);

    fetch(API_URL, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(addedCar => {
        setCars([...cars, addedCar]);
        setNewCar({ brand: '', model: '', release_year: '' });
        setImageFile(null);
      });
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>🚗 Car Catalog</h1>
        <a href="/" style={{ display: 'inline-block', marginBottom: '15px', textDecoration: 'none' }}>
          <button style={{
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            backgroundColor: '#eee',
            border: '1px solid #ccc',
            borderRadius: '6px'
          }}>← กลับหน้าแรก</button>
        </a>

        <div className="add-car-form" style={{ marginTop: '20px' }}>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={newCar.brand}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={newCar.model}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="release_year"
            placeholder="Year"
            value={newCar.release_year}
            onChange={handleInputChange}
          />
          <input
            type="file"
            onChange={handleFileChange}
          />
          <button onClick={handleAddCar}>➕ Add Car</button>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : cars.length === 0 ? (
        <p>No data available.</p>
      ) : (
        cars.map((car, index) => (
          <div key={car.id || index} className="car-card">
            <div className="car-info">
              <p><strong>Brand :</strong> {car.brand}</p>
              <p><strong>Model :</strong> {car.model}</p>
              <p><strong>Year :</strong> {car.release_year}</p>
            </div>
            <img src={car.image_url} alt={car.model} style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '10px' }} />
          </div>
        ))
      )}
    </div>
  );
}

export default CarCatalog;
