import React, { useState } from 'react';

function AuthForm({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage(''); // Clear errors when switching forms
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please provide both email and password');
      return;
    }

    if (!isLogin && password !== retypePassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const url = isLogin
      ? 'https://bookmycater.freewebhostmost.com/login.php'
      : 'https://bookmycater.freewebhostmost.com/signup.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage(`${isLogin ? 'Login' : 'Signup'} successful!`);
        // Close the form and change the button to Logout
        onClose();
        alert(`${isLogin ? 'Login' : 'Signup'} successful!`); // Success message
      } else {
        setErrorMessage(result.message || 'An error occurred');
      }
    } catch (error) {
      setErrorMessage('An error occurred during the request');
    }
  };

  return (
    <div className="relative">
      {/* Close icon */}
      <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
        &times; {/* You can replace this with an SVG icon or an image */}
      </button>

      <h2 className="text-lg font-bold mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
            className="border p-2 mb-2 w-full"
          />
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <p className="mt-2">
        {isLogin ? 'No account? ' : 'Already have an account? '}
        <button onClick={toggleForm} className="text-blue-500 underline">
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
