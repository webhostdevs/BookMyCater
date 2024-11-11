import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar({ searchTerm, setSearchTerm, toggleAuthForm, isLoggedIn, setLoggedIn }) {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
    logout({ logoutParams: { returnTo: window.location.origin } });
    alert('Logged out successfully');
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left - Company Name */}
      <Link to="/" className="text-2xl font-bold text-gray-800">BookMyCaterer</Link>

      {/* Right - Search and Navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          {/* Optional Search Field could go here */}
        </div>

        {isAuthenticated && (
          <Link to="/ContactUs" className="text-gray-700 hover:text-black transition">
            Contact
          </Link>
        )}

        {isAuthenticated ? (
          <div className="relative">
            <FaUser size={20} color="currentColor" onClick={toggleDropdown} className="cursor-pointer" />
            <p className="ml-2">{user.nickname}</p>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </Link>
                {user.email === "siddeshwarreddy616@gmail.com" && (
                  <a
                    href="https://bookmycater.freewebhostmost.com/admin.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    New Vendor
                  </a>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
