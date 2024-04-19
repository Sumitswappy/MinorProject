
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBInputGroup,
  MDBBtn,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from 'mdb-react-ui-kit';
import './Navbar.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate=useNavigate();
  const [showDashboard, setShowDashboard] = useState(false);
  const [username, setUsername]= useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin]= useState(false);
  useEffect(() => {
    setIsLoggedIn(!!sessionStorage.getItem("email"));
    setShowDashboard(!!sessionStorage.getItem("admin"));
  }, []);
  const handleLogOut = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("admin");
handleRefresh();
    navigate("/");
  };
  const handleDashboard = () => {
    navigate("/AdminHome/dashboard");
  }
    const url = `http://65.2.79.30:8080/user/getByEmail?email=${sessionStorage.getItem("email")}`;
    Axios.get(url)
    .then((res) => {
      sessionStorage.setItem("name",res.data[0].firstName);
      
      setUsername(res.data[0].id);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
    
  function handleRefresh() {
    window.location.reload();
  }
  console.log(username);
  console.log("admin");
  console.log(isAdmin);
  const onHandleEdit = (username) => {
    console.log(username);
    const userId = username;
    console.log("User ID:", userId);
    navigate("/userprofile", { state: { id: userId } });
  };
  const [openNavColor, setOpenNavColor] = useState(false);

  return (
    <MDBNavbar id="navbar-0" fixed='top' expand='lg' dark className={`p-3 mb-2 ${isLoggedIn ? 'bg-primary bg-gradient' : 'bg-dark bg-gradient'}`}>
      <MDBContainer fluid>
        <MDBIcon fas icon="book-open" size='2x' style={{ color: isLoggedIn ? '#4d4d4d' : '#666565', paddingRight: '5px' }} />
        <MDBNavbarBrand href='/'>Unifind.in</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavColor(!openNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse open={openNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 lg-3'>
            <MDBDropdown group className='ms-2'>
              <MDBDropdownToggle outline rounded color={isLoggedIn ? 'light' : 'warning'} className='nav-button-1'><MDBIcon fas icon="landmark" size='lg'/> Colleges</MDBDropdownToggle>
              <MDBDropdownMenu dark >
                 <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem> 
              </MDBDropdownMenu>
            </MDBDropdown>
            
            
            <MDBDropdown group className='ms-2'>
              <MDBDropdownToggle outline rounded color={isLoggedIn ? 'light' : 'warning'} className='nav-button-1' ><MDBIcon fas icon="graduation-cap" size='lg'/> Courses</MDBDropdownToggle>
              <MDBDropdownMenu dark>
                 <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem> 
              </MDBDropdownMenu>
            </MDBDropdown>
            
            
            {/*<MDBDropdown group className='ms-2'>
              <MDBDropdownToggle outline rounded color='warning' className='nav-button-1'><MDBIcon fas icon="award" size='lg'/> Exams</MDBDropdownToggle>
              <MDBDropdownMenu dark>
                {/* <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem> 
              </MDBDropdownMenu>
            </MDBDropdown>*/}
            <MDBNavbarItem className='ms-2'>
              <MDBNavbarLink href='#'>Reviews</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          {isLoggedIn ? (
        <MDBDropdown id="logout-navbar" group className="logout-dropdown">
          <MDBDropdownToggle outline rounded color='light' className='nav-button-3'><MDBIcon fas icon="user-graduate" size='lg' /> Hi, {sessionStorage.getItem("name")} </MDBDropdownToggle>
          <MDBDropdownMenu dark>
            <MDBDropdownItem link tag='a' onClick={()=>onHandleEdit(username)}>Profile</MDBDropdownItem>
            <MDBDropdownItem link tag='a' style={{ display: showDashboard ? 'block' : 'none' }} onClick={handleDashboard}>Dashboard</MDBDropdownItem>
            <MDBDropdownItem link tag='a' onClick={handleLogOut}>Log out</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      ) : (
        <MDBDropdown id="login-navbar" group className="login-register-dropdown">
          <MDBDropdownToggle outline rounded color='danger' className='nav-button-2'><MDBIcon fas icon="user-graduate" size='lg' /> Login/SignUp</MDBDropdownToggle>
          <MDBDropdownMenu dark>
            <MDBDropdownItem link href='/Login'>Student Login</MDBDropdownItem>
            <MDBDropdownItem link href='/Register'>Student Sign Up</MDBDropdownItem>
            <MDBDropdownItem link href='/Collegelogin'>Login for College</MDBDropdownItem>
            <MDBDropdownItem link href='/College-register'>Sign up for College </MDBDropdownItem>
            <MDBDropdownItem link href='/AdminLogin'>Admin Login</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      )}
          {/*<MDBDropdown id="login-navbar" group className="login-register-dropdown">
            <MDBDropdownToggle outline rounded color='danger' className='nav-button-2'><MDBIcon fas icon="user-graduate" size='lg' /> Login/SignUp</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link href='/Login'>Student Login</MDBDropdownItem>
              <MDBDropdownItem link href='/Register'>Student Sign Up</MDBDropdownItem>
              <MDBDropdownItem link href='/College-register'>College Register</MDBDropdownItem>
              <MDBDropdownItem link href='/AdminLogin'>Admin Login</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown id="logout-navbar"  group className="logout-dropdown">
      <MDBDropdownToggle outline rounded color='info' className='nav-button-3'><MDBIcon fas icon="user-graduate" size='lg' /> Hi, {sessionStorage.getItem("email")}</MDBDropdownToggle>
      <MDBDropdownMenu dark>
        <MDBDropdownItem ></MDBDropdownItem>
        <MDBDropdownItem link tag='a' onClick={handleLogOut}>Log out</MDBDropdownItem>
      </MDBDropdownMenu>
          </MDBDropdown>*/}
         {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' style={{ width: '100%' }} placeholder='Search here' aria-label='Search' />
            <MDBBtn outline color='success' className='nav-search mt-0 p-2'>
              <MDBIcon fas icon="search" size='lg' />
            </MDBBtn>
              </form>*/}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}