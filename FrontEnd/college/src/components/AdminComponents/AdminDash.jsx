import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import './AdminDash.css';
export default function AdminDash() {
  return (
          <div className="view-user">
      
      <MDBContainer fluid>
        
        <MDBBreadcrumb className="view-breadcrumb" bold>
          <MDBBreadcrumbItem>
            <a href='/AdminHome' className='text-reset'>
             Home
            </a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <a href='/AdminHome/dashboard' className='text-reset'>
              <u>Dashboard</u>
            </a>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <h2 className="view-heading">Dashboard</h2>
        <MDBRow>
        <MDBCol size='3'>
        
        <div className='user-count-box'>
        <span id='user-count'><h3 className="view-heading">Users</h3></span>
      </div>
        </MDBCol>
        <MDBCol size='3'>
        <div className='user-count-box'>
        <span id='user-count'><h3 className="view-heading">Users</h3></span>
      </div>
        </MDBCol>
        
        </MDBRow>
        
      </MDBContainer>
    </div>
  )
}
