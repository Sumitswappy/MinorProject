import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
function AdminLogin() {
  const navigate = useNavigate();
  const url="http://localhost:8080/login";
const[data,setData]=useState({
  userName:"",
  password:"",
})
function handle(e){
  const newData={...data}
  newData[e.target.id]=e.target.value
  setData(newData)
}
function submit(e){
  e.preventDefault();
  Axios.post(url,{
    userName:data.userName,
    password:data.password
  }).then((res)=>{
    if(res.data==true){
      sessionStorage.setItem("email",data.userName);
      console.log(res.data);
      navigate("/");
      alert("Login Successful...");
    }
    else{
      alert("User Not Found, Register first...");
    }
  })
}

  return (
    <form onSubmit={(e)=>submit(e)}>
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Log In</h2>

          <MDBRow>
            <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Username' id='userName' type='email' onChange={(e)=>handle(e)} value={data.userName} />
            </MDBCol>

            <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={(e)=>handle(e)} value={data.password} />
            </MDBCol>
          </MDBRow>
          <MDBBtn className='w-100 mb-4' size='md' href='/AdminHome/dashboard'>Log In</MDBBtn>
          <p className='ms-5'>Don't have an account? <a href="/Register" className="link-primary">Register here</a></p>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer></form>
  );
}

export default AdminLogin;
