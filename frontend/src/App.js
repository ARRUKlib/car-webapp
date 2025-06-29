import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import CarCatalog from './CarCatalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/cars" element={<CarCatalog />} />
      </Routes>
    </Router>
  );
}

export default App;
