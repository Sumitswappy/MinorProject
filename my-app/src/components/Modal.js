import React from 'react';
import './Modal.css';
import Login from './login';
import Signup from './signup';

export default function Modal({ isOpen, onClose, showLogin, switchToLogin, switchToSignup }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-wrapper">
          {showLogin ? (
            <Login onClose={onClose} switchToSignup={switchToSignup} />
          ) : (
            <Signup onClose={onClose} switchToLogin={switchToLogin} />
          )}
        </div>
      </div>
    )
  );
}