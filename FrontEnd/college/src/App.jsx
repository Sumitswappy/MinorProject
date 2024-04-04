import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/StudentLogin';
import Register from './Pages/StudentRegister';
import AdminLogin from './Pages/AdminLogin';
import AdminHome from './Pages/AdminHome';
import AdminDashboard from './components/AdminComponents/AdminDash';
import AddUser from './components/AdminComponents/AddUser';
import ViewUser from './components/AdminComponents/ViewUser';
import CollegeList from './Pages/CollegeList';
import EditUser from './components/AdminComponents/EditUser';
import CollegeRegister from './Pages/CollegeRegister';
import CollegeDetail from './Pages/CollegeDetail';
import AddCollege from './components/AdminComponents/AddCollege';
import ViewCollege from './components/AdminComponents/ViewCollege';
import UserProfile from './Pages/UserProfile';

export default function App() {
  return (
    <Router>
      <div className='App'>
        
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/College-register" element={<CollegeRegister/>}/>
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Colleges" element={<CollegeList/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/CollegesProfile" element={<CollegeDetail/>} />
          <Route path="/AdminHome" element={<AdminHome />} >
        <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="add-user" element={<AddUser/>}/>
            <Route path="view-user" element={<ViewUser/>}/>
            <Route path="edit-user" element={<EditUser/>}/>
            <Route path="add-college" element={<AddCollege/>}/>
            <Route path="view-college" element={<ViewCollege/>}/>
            </Route>
        </Routes> 
      </div>
    </Router>
  );
}
