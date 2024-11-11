import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar({ searchTerm, setSearchTerm, toggleAuthForm, isLoggedIn, setLoggedIn }) {
  const handleLogout = () => {
    // Handle logout logic here
    setLoggedIn(false);
    alert('Logged out successfully');
  };
  const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left - Company Name */}
      <Link to="/" className="text-2xl font-bold text-gray-800">BookMyCaterer</Link>

      {/* Right - Search and Navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

        </div>

        
       {
        isAuthenticated && 
        <Link to="/ContactUs" className="text-gray-700 hover:text-black transition">
        Contact
        </Link> 
       }


        {
          isAuthenticated && <FaUser size={16} color="currentColor" />
        } 
        {
          isAuthenticated && <p className="ml-0">{user.nickname}</p>
        } 
        
        {
          isAuthenticated ?
          
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    :
    <button onClick={() => loginWithRedirect()}>Log In</button>
        }
        
        
      </div>
    </nav>
  );
}

export default Navbar;
