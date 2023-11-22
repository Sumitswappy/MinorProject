import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRadio,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';
import './CollegeRegister.css';
function CollegeRegister() {
    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
        "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
        "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
      ];
      
  return (
    <div className='form-body'>
    <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center p-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">College Registration Form</h3>

      <MDBRow>

        <MDBCol md=''>
          <MDBInput wrapperClass='mb-4' label='Name of College' size='lg' id='form1' type='text'/>
        </MDBCol>

      </MDBRow>
      <MDBRow>

<MDBCol md='6'>
  <MDBInput wrapperClass='mb-4' label='Name of the Contact Person' size='lg' id='form2' type='text'/>
</MDBCol>

<MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form3' type='rel'/>
        </MDBCol>

</MDBRow>
      <MDBRow>
      <MDBCol md='6'> <select className="custom-select">
        <option value="">Select State</option>
        {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Select City' size='lg' id='form4' type='text'/>
        </MDBCol>

        

      </MDBRow>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form5' type='email'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form6' type='password'/>
        </MDBCol>

      </MDBRow>

      <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer></div>
  );
}

export default CollegeRegister;