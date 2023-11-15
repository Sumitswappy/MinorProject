import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCollapse,
  MDBNavbarLink,
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import './AdminSidenav.css';
import { NavLink } from 'react-router-dom';

export default function AdminSidenav() {
  const [verticalActive, setVerticalActive] = useState('tab1');
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <>
      <div className="d-lg-none">
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavSecond(!openNavSecond)}
            >
              <MDBIcon color="primary" icon="bars" fas size="2x" />
            </MDBNavbarToggler>

            <MDBNavbarBrand href="/">Unifind.in</MDBNavbarBrand>
            <MDBCollapse navbar open={openNavSecond}>
              <MDBNavbarNav className="flex-column">
                <NavLink
                  to="/AdminDashboard"
                  onClick={() => handleVerticalClick('tab1')}
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/AdminDashboard/profile"
                  onClick={() => handleVerticalClick('tab2')}
                  className="nav-link"
                  activeClassName="active"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/AdminDashboard/message"
                  onClick={() => handleVerticalClick('tab3')}
                  className="nav-link"
                  activeClassName="active"
                >
                  Messages
                </NavLink>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>

      <MDBCollapse
        show={showSidebar}
        tag="nav"
        className="d-lg-block bg-white sidebar"
      >
        <MDBIcon fas icon="book-open" size="2x" style={{ color: '#709085' }} />
        <h5>Unifind.in</h5>
        <div className="position-sticky">
          <MDBRow>
            <MDBCol>
              <MDBNavbarLink
                onClick={() => handleVerticalClick('tab1')}
                active={verticalActive === 'tab1'}
                tag={NavLink}
                to="/AdminDashboard/profile"
              >
                Profile
              </MDBNavbarLink>
              <MDBNavbarLink
                onClick={() => handleVerticalClick('tab2')}
                active={verticalActive === 'tab2'}
                tag={NavLink}
                to="/AdminDashboard/message"
              >
                Messages
              </MDBNavbarLink>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBCollapse>
    </>
  );
}
