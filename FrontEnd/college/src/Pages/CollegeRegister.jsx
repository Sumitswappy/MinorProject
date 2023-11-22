import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import './CollegeRegister.css';

const CollegeRegister = () => {
  const [collegeData, setCollegeData] = useState({
    collegeName: '',
    contactPerson: '',
    phoneNumber: '',
    state: '',
    city: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Add your validation logic here
    if (!collegeData.collegeName.trim()) {
      newErrors.collegeName = '*College name is required';
      valid = false;
    }

    if (!collegeData.contactPerson.trim()) {
      newErrors.contactPerson = '*Contact person name is required';
      valid = false;
    }

    if (!collegeData.phoneNumber.trim() || !/^\d{10}$/.test(collegeData.phoneNumber.trim())) {
      newErrors.phoneNumber = '*Valid 10-digit phone number is required';
      valid = false;
    }

    if (!collegeData.state.trim()) {
      newErrors.state = '*State is required';
      valid = false;
    }

    if (!collegeData.city.trim()) {
      newErrors.city = '*City is required';
      valid = false;
    }

    if (!collegeData.email.trim() || !/\S+@\S+\.\S+/.test(collegeData.email.trim())) {
      newErrors.email = '*Valid email is required';
      valid = false;
    }

    if (!collegeData.password.trim()) {
      newErrors.password = '*Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Your form submission logic here
      console.log('Form submitted:', collegeData);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCollegeData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '', // Clear the error message when the user starts typing
    }));
  };

  return (
    <div className='form-body'>
      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center p-5'>
          <MDBCard>
            <MDBCardBody className='px-4'>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">College Registration Form</h3>
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol md=''>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Name of College'
                      size='lg'
                      id='collegeName'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.collegeName}
                    />
                    {errors.collegeName && <div className="text-danger">{errors.collegeName}</div>}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Name of the Contact Person'
                      size='lg'
                      id='contactPerson'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.contactPerson}
                    />
                    {errors.contactPerson && <div className="text-danger">{errors.contactPerson}</div>}
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Phone Number'
                      size='lg'
                      id='phoneNumber'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.phoneNumber}
                    />
                    {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <select
                      className="custom-select"
                      id='state'
                      onChange={handleChange}
                      value={collegeData.state}
                    >
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.state && <div className="text-danger">{errors.state}</div>}
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Select City'
                      size='lg'
                      id='city'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.city}
                    />
                    {errors.city && <div className="text-danger">{errors.city}</div>}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Email'
                      size='lg'
                      id='email'
                      type='email'
                      onChange={handleChange}
                      value={collegeData.email}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Password'
                      size='lg'
                      id='password'
                      type='password'
                      onChange={handleChange}
                      value={collegeData.password}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                  </MDBCol>
                </MDBRow>

                <MDBBtn className='mb-4' size='lg' type="submit">Submit</MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default CollegeRegister;
