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
import React, { useState } from 'react';

export default function Navbar() {
  const [openNavColor, setOpenNavColor] = useState(false);

  return (
    <MDBNavbar fixed='top' expand='lg' dark className="p-3 mb-2 bg-dark bg-gradient text-white">
      <MDBContainer fluid>
        <MDBIcon fas icon="book-open" size='2x' style={{ color: '#709085' }} />
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
              <MDBDropdownToggle className=" bg-warning bg-gradient text-light rounded-5"><MDBIcon fas icon="landmark" size='lg'/> Colleges</MDBDropdownToggle>
              <MDBDropdownMenu dark>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            
            
            <MDBDropdown group className='ms-2'>
              <MDBDropdownToggle className=" bg-warning bg-gradient text-light rounded-5"><MDBIcon fas icon="graduation-cap" size='lg'/> Courses</MDBDropdownToggle>
              <MDBDropdownMenu dark>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            
            
            <MDBDropdown group className='ms-2'>
              <MDBDropdownToggle className=" bg-warning bg-gradient text-light rounded-5"><MDBIcon fas icon="award" size='lg'/> Exams</MDBDropdownToggle>
              <MDBDropdownMenu dark>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavbarItem className='ms-2'>
              <MDBNavbarLink href='#'>Reviews</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBDropdown group className="login-register-dropdown">
            <MDBDropdownToggle className=" bg-danger bg-gradient text-light rounded-5"><MDBIcon fas icon="user-graduate" size='lg' /> Login/SignUp</MDBDropdownToggle>
            <MDBDropdownMenu dark>
              <MDBDropdownItem link href='/Login'>Login</MDBDropdownItem>
              <MDBDropdownItem link href='/Register'>Register</MDBDropdownItem>
              <MDBDropdownItem link href='/AdminLogin'>Admin Login</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' style={{ width: '300px' }} placeholder='Search here' aria-label='Search' />
            <MDBBtn color='success'><MDBIcon fas icon="search" size='lg'/></MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
