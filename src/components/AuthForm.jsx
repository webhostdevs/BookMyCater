import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function AuthForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [message, setMessage] = useState('');

  const handleAuth = async () => {
    if (!isLogin && password !== retypePassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const url = isLogin ? 'http://localhost/api/login.php' : 'http://localhost/api/signup.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        // Handle successful login/signup
        onClose(); // Close the form after successful action
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-form bg-white p-6 rounded shadow-md relative w-96">
      <FaTimes
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={onClose}
      />
      <h2 className="text-xl font-semibold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
      {!isLogin && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded mb-2 w-full"
        />
      )}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
      {!isLogin && (
        <input
          type="password"
          placeholder="Retype Password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          className="p-2 border rounded mb-2 w-full"
        />
      )}
      <button onClick={handleAuth} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
      <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 mt-2 w-full">
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
      </button>
      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
}

export default AuthForm;
