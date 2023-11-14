import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './Register.css';
function Register() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
  Explore Your Future in Education <br />
  <span className="text-primary">with Unifind.in</span>
</h1>

<p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
  Welcome to Unifind.in - your gateway to a world of educational opportunities! 🎓 Whether you're planning your academic journey or looking to enhance your skills, we've got you covered. Register with us to unlock a host of features and benefits:</p><p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>

  - Discover Diverse Colleges: Explore a wide range of colleges across different cities and courses.</p><p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
  - Personalized Recommendations: Receive tailored suggestions based on your interests and preferences.</p><p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
  - Stay Informed: Get the latest updates on admission deadlines, courses, and more.</p><p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
  - Connect with Peers: Join a community of like-minded individuals and share insights.</p><p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>

  Your future begins here! Register now and embark on a journey towards academic excellence. 🚀
</p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Mobile No.' id='form1' type='text'/>
              
              <MDBRow>
                <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='City' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='State' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
              
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'/>


              <MDBBtn className='w-100 mb-4' color='primary' size='md'>Register Now</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#00589E' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>


              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;