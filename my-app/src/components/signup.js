
import React, { useState } from 'react';
import './Modal.css';

export default function Signup({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Add the name state for signup
  const [error, setError] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const handleLogin = () => {
    // Your login logic here
  };

  const handleSignup = () => {
    if (!name || !email || !password) {
        setError('Please fill in all fields.');
      } else {
        setError('');
        // Handle successful signup here
      }
  };


  return (
    <div className="modal-content">
      <h2>{!showSignup ? 'Register' : 'Welcome Back, Log In!'}</h2>
      {!showSignup && (
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
            {showSignup && (
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
       <h3>{!showSignup ? '' : 'Forgot Password'}</h3>
     </>
      )}
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
