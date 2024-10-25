import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import VendorDetails from './components/VendorDetails';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="bg-white min-h-screen w-full">
        {/* Navbar */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
