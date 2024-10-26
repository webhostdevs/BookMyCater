import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import VendorDetails from './components/VendorDetails';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAuthForm, setShowAuthForm] = useState(false);

  // Toggle the visibility of the AuthForm modal
  const toggleAuthForm = () => {
    setShowAuthForm(!showAuthForm);
  };

  return (
    <Router>
      <div className="bg-white min-h-screen w-full">
        {/* Navbar with toggleAuthForm passed as a prop */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleAuthForm={toggleAuthForm} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Routes>

        {/* AuthForm Modal */}
        {showAuthForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AuthForm onClose={toggleAuthForm} />
              {/* Remove the close button here since we have the 'X' in AuthForm */}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
