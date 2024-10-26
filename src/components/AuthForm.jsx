import React, { useState } from 'react';

function AuthForm({ onClose }) {
  const [isSignup, setIsSignup] = useState(true); // Toggle between login and signup
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Check if in signup mode and passwords match
    if (isSignup && password !== retypePassword) {
      setError('Both passwords must be the same');
      return;
    }

    // Updated URLs for login and signup
    const url = isSignup 
      ? 'https://bookmycater.freewebhostmost.com/signup.php' 
      : 'https://bookmycater.freewebhostmost.com/login.php';
      
    const data = {
      username: isSignup ? username : undefined, // Include username only on signup
      email,
      password,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSuccess(result.message);
        // Optionally, reset fields or perform any post-login/signup actions
        if (isSignup) {
          setUsername('');
          setEmail('');
          setPassword('');
          setRetypePassword('');
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred, please try again.');
    }
  };

  return (
    <div className="auth-form">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        &times; {/* This represents an "X" icon */}
      </button>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignup && (
          <input
            type="password"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        <p className="error">{error && <span>{error}</span>}</p>
        <p className="success">{success && <span>{success}</span>}</p>
      </form>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}

export default AuthForm;
