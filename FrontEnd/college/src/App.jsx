import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';

import ProfileContent from './components/AdminComponents/ProfileContent';
import MessageContent from './components/AdminComponents/MessageContent';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} >
            <Route path="profile" element={<ProfileContent/>}/>
            <Route path="message" element={<MessageContent/>}/>
            </Route>
        </Routes>
      </div>
    </Router>
  );
}
