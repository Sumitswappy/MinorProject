import React, { useState } from 'react';
import './Modal.css';

export default function Login({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true); // Use showLogin state

  const handleLogin = () => {
    // Your login logic here
  };

  const handleSignup = () => {
    if (showLogin) {
      // Handle login
    } else {
      if (!name || !email || !password) {
        setError('Please fill in all fields.');
      } else {
        setError('');
        // Handle successful signup here
      }
    }
  };

  return (
    <div className="modal-content">
      <h2>{showLogin ? 'Welcome Back, Log In!' : 'Register'}</h2>
      {showLogin && (
        <>
          <label>Email Id: </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <h3>{showLogin ? 'Forgot Password' : ''}</h3>
        </>
      )}
      {!showLogin && (
        <>
          <label>Your Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email Address:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </>
      )}
      {error && <p className="error">{error}</p>}
      <button onClick={handleSignup}>
        {showLogin ? 'Log In' : 'Sign Up'}
      </button>
      <p>
        {showLogin ? 'New to UniFind?' : 'Already have an account?'}
        <a href="/signup" onClick={(e) => { e.preventDefault(); setShowLogin(!showLogin); }}>
          {showLogin ? 'Register Now' : 'Log In'}
        </a>
      </p>
      <span className="close" onClick={onClose}>
        <img src="https://cdn-icons-png.flaticon.com/128/4347/4347434.png" width="40" alt="Close" />
      </span>
    </div>
  );
}