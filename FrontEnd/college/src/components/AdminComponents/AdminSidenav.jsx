// AdminSidenav.js
import React, { useState } from 'react';
import {
  MDBAccordion,
  MDBAccordionItem,
  
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import './AdminSidenav.css'; // Uncomment this line to import the CSS file

export default function AdminSidenav() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    
        <MDBContainer tag="nav" className="d-lg-block sidebar" style={{overflow: 'hidden'}}>
          <MDBIcon fas icon="book-open" size="2x" />
          <h5>Unifind.in</h5>
          <div className="position-sticky">
            <MDBNavbarLink
              onClick={() => handleVerticalClick('tab1')}
              active={verticalActive === 'tab1'}
              tag={NavLink}
              to="/AdminHome/dashboard"
            >
              Dashboard
            </MDBNavbarLink>
            <MDBAccordion flush>
              <MDBAccordionItem collapseId={1} headerTitle="User">
                <MDBNavbarLink
                  onClick={() => handleVerticalClick('tab1')}
                  active={verticalActive === 'tab1'}
                  tag={NavLink}
                  to="/AdminHome/add-user"
                >
                  Add User
                </MDBNavbarLink>
                <MDBNavbarLink
                  onClick={() => handleVerticalClick('tab2')}
                  active={verticalActive === 'tab2'}
                  tag={NavLink}
                  to="/AdminHome/view-user"
                >
                  View User
                </MDBNavbarLink>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </MDBContainer>
   
  );
}
