import React, { useState } from 'react';
import './Modal.css';

export default function Signup({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [City, setCity] = useState('');
  const [Course, setCourse] = useState('');
  const [error, setError] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
  // Simulated user credentials for login (hardcoded for demonstration purposes)
  const user = {
    email: 'user@example.com',
    password: 'password123',
  };

  // Check if the entered credentials match the hardcoded user data
  if (email === user.email && password === user.password) {
    setLoggedIn(true);
    setError('');
  } else {
    setLoggedIn(false);
    setError('Invalid email or password.');
  }
  };

  const handleSignup = () => {
    if (!name || !email || !password || !City || !Course) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError("Passwords don't match.");
    } else {
      setError('');
      // Implement your signup logic here (in a real application, this would save user data)
      console.log('Signup successful');
    
      // Implement your signup logic here
      setLoggedIn(true); // For demonstration, considering signup as successful login
    }
  };

  return (
    <div className="modal-content">
      <h2>{!showSignup ? 'Register' : 'Welcome Back, Log In!'}</h2>
      {!showSignup ? (
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
          <label>City:</label>
          <input
            type="text"
            placeholder="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label>Course:</label>
          <input
            type="text"
            placeholder="Course"
            value={Course}
            onChange={(e) => setCourse(e.target.value)}
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
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </>
      ) : (
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
          {showForgotPassword && <h3>Forgot Password</h3>}
        </>
      )}
      {error && <p className="error">{error}</p>}
      <button onClick={!showSignup ? handleSignup : handleLogin}>
        {!showSignup ? 'Sign Up' : 'Log In'}
      </button>
      <p>
        {!showSignup ? 'Already have an account?' : 'New to UniFind?'}
        <a href="/login" onClick={(e) => { e.preventDefault(); setShowSignup(!showSignup); }}>
          {!showSignup ? 'Log In' : 'Register Now'}
        </a>
      </p>
      <span className="close" onClick={onClose}>
        <img src="https://cdn-icons-png.flaticon.com/128/4347/4347434.png" width="40" alt="Close" />
      </span>
    </div>
  );
}
