import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import VendorDetails from "./components/VendorDetails";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import ContactForm from "./components/ContactUs";
import "./App.css";
import Footer from "./components/Footer";
import NewVendor from "./components/NewVendor.jsx";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleAuthForm = () => {
    setShowAuthForm(!showAuthForm);
  };

  return (
    <Router>
      <div className="bg-white min-h-screen w-full">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          toggleAuthForm={toggleAuthForm}
          isLoggedIn={isLoggedIn}
          setLoggedIn={setLoggedIn}
        />

        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/admin" element={<NewVendor />} />
        </Routes>

        {showAuthForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AuthForm onClose={toggleAuthForm} setLoggedIn={setLoggedIn} />
            </div>
          </div>
        )}
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
