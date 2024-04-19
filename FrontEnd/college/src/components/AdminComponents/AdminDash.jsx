import { React, useState } from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBContainer, MDBRow,MDBIcon } from 'mdb-react-ui-kit';
import './AdminDash.css';
import Axios from "axios";
export default function AdminDash() {
  const [userNo, setUserNo]=useState([]);
  const [collegeNo, setCollegeNo]=useState([]);
  const userurl = "http://65.2.79.30:8080/user";
  const collegeurl="http://65.2.79.30:8080/College"
  const getQuery=`/get`;
  const getUserUrl=`${userurl}${getQuery}`;
  const getCollegeUrl=`${collegeurl}${getQuery}`;

  Axios.get(getUserUrl)
    .then((res) => {
      setUserNo(res.data.length);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

    Axios.get(getCollegeUrl)
    .then((res) => {
      setCollegeNo(res.data.length);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  return (
          <div className="view-user">
      
      <MDBContainer fluid>
        
        <MDBBreadcrumb className="view-breadcrumb" bold>
          <MDBBreadcrumbItem>
            <a href='/' className='text-reset'>
             Home
            </a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <a href='/AdminHome/dashboard' className='text-reset'>
              <u>Dashboard</u>
            </a>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <h2 className="main-heading">Dashboard</h2>
        <MDBRow>
        <MDBCol size='3'>
        
        <div className='user-count-box'>
        <MDBIcon fas icon="user-alt" size="2x"/>
        <h3 className="view-heading">Users</h3>
        <h4>{userNo}</h4>
      </div>
        </MDBCol>
        <MDBCol size='3'>
        <div className='college-count-box'>
        <MDBIcon fas icon="university" size='2x'/>
        <h3 className="view-heading">Colleges</h3>
        <h4>{collegeNo}</h4>
      </div>
        </MDBCol>
        
        </MDBRow>
        
      </MDBContainer>
    </div>
  )
}
