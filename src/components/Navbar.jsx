

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ searchTerm, setSearchTerm, toggleAuthForm, isLoggedIn, setLoggedIn }) {
  const handleLogout = () => {
    // Handle logout logic here
    setLoggedIn(false);
    alert('Logged out successfully');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left - Company Name */}
      <Link to="/" className="text-2xl font-bold text-gray-800">Company Name</Link>

      {/* Right - Search and Navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
{/*           <input
            type="text"
            placeholder="Location..."
            className="p-2 w-64 border-none focus:outline-none focus:ring-0 bg-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> 
          <button className="bg-gray-600 text-white px-4 py-2">Search</button>  */}
        </div>
        <Link to="/" className="text-gray-700 hover:text-black transition">Home</Link>
{/*         <Link to="/about" className="text-gray-700 hover:text-black transition">About</Link> */}
        <Link to="/contact" className="text-gray-700 hover:text-black transition">Contact</Link>  

        {/* Login/Logout Button */}
        {isLoggedIn ? (
          <button 
            onClick={handleLogout} 
            className="flex items-center text-gray-700 hover:text-black transition"
          >
            <i className="fas fa-sign-out-alt mr-1"></i> Logout
          </button>
        ) : (
          <button 
            onClick={toggleAuthForm} 
           className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            <i className="fas fa-user mr-2"></i> Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
