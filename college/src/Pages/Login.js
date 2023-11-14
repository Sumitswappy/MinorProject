import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBSpinner
} from 'mdb-react-ui-kit';

function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // Simulate an async login process
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Perform actual login logic here
    }, 2000); // Simulating a 2-second login process
  };

  return (
    <>
      {loading && (
        <MDBSpinner role='status'>
          <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
      )}
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm='6'>
            <div className='d-flex flex-row ps-5 pt-5'>
              <MDBIcon fas icon="book-open" size='3x' style={{ color: '#709085' }} />
              <span className="h1 fw-bold mb-0">Unifind.in</span>
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" />

              <MDBBtn className="mb-4 px-5 mx-5 w-100" color='primary' size='lg'>Login</MDBBtn>
              <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
              <p className='ms-5'>Don't have an account? <a href="/Register" className="link-primary">Register here</a></p>
            </div>
          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src="https://img.buzzfeed.com/buzzfeed-static/complex/images/depg0oqo1inie9ifcg3d/most-beautiful-college-campuses-title.jpg?output-format=jpg&output-quality=auto" width={486} height={729}
              alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
