import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import FeaturedColleges from './components/FeaturedColleges';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Modal from './components/Modal.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const openModal = (modalType) => {
    // The function to open the modal, here you should determine whether it's login or signup
    // and set the state accordingly.
    if (modalType === 'login') {
      setShowLogin(true);
    } else if (modalType === 'signup') {
      setShowLogin(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const switchToLogin = () => {
    // Function to switch to the login form within the modal
    setShowLogin(true);
  };

  const switchToSignup = () => {
    // Function to switch to the signup form within the modal
    setShowLogin(false);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Navbar openModal={openModal} />

          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            showLogin={showLogin}
            switchToLogin={switchToLogin}
            switchToSignup={switchToSignup}
          />

          <Routes>
            <Route path="/FeaturedColleges" element={<FeaturedColleges />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
