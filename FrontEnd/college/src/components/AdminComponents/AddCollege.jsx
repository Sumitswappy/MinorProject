import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn,
  MDBContainer,
  MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import './AddCollege.css';
import { NavLink } from 'react-router-dom';

const AddCollege = () => {
  const [collegeData, setCollegeData] = useState({
    name: "",
    contactName: "",
    phoneNumber: "",
    state: "",
    city: "",
    email: "",
    password: "",
    affiliation: "",
    certification: "",
    establishmentYear: "",
    collegeCourses: [],
  });
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/courses/get");
        setCourse(response.data.map((course) => course.course));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const [errors, setErrors] = useState({});

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const handleCourseChange = (index, value) => {
    setCollegeData((prevData) => {
      const updatedCourses = [...prevData.collegeCourses];
      if (value != undefined) {
        console.log(value);
        updatedCourses[index] = { id: value };
      }
      return {
        ...prevData,
        collegeCourses: updatedCourses,
      };
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [`course${index}`]: "",
      collegeCourses: "",
    }));
  };

  let i = 0;

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!collegeData.name.trim()) {
      newErrors.name = "*College name is required";
      valid = false;
    }

    if (!collegeData.contactName.trim()) {
      newErrors.contactName = "*Contact person name is required";
      valid = false;
    }

    if (
      !collegeData.phoneNumber.trim() ||
      !/^\d{10}$/.test(collegeData.phoneNumber.trim())
    ) {
      newErrors.phoneNumber = "*Valid 10-digit phone number is required";
      valid = false;
    }

    if (!collegeData.state.trim()) {
      newErrors.state = "*State is required";
      valid = false;
    }

    if (!collegeData.city.trim()) {
      newErrors.city = "*City is required";
      valid = false;
    }

    if (
      !collegeData.email.trim() ||
      !/\S+@\S+\.\S+/.test(collegeData.email.trim())
    ) {
      newErrors.email = "*Valid email is required";
      valid = false;
    }

    if (!collegeData.password.trim()) {
      newErrors.password = "*Password is required";
      valid = false;
    }

    if (!collegeData.affiliation.trim()) {
      newErrors.affiliation = "*Affiliation is required";
      valid = false;
    }

    if (!collegeData.certification.trim()) {
      newErrors.certification = "*Certification is required";
      valid = false;
    }

    if (
      !collegeData.establishmentYear.trim() ||
      !/^\d{4}$/.test(collegeData.establishmentYear.trim())
    ) {
      newErrors.establishmentYear = "*Valid 4-digit year is required";
      valid = false;
    }

    if (!collegeData.collegeCourses.length) {
      newErrors.collegeCourses = "*At least one course is required";
      valid = false;
    } else {
      collegeData.collegeCourses.forEach((course, index) => {
        if (!course || !course.id) {
          newErrors[`course${index}`] = `*Course ${index + 1} is required`;
          valid = false;
        }
      });
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    while (i < collegeData.collegeCourses.length) {
      if (collegeData.collegeCourses[i] == undefined) {
        delete collegeData.collegeCourses[i];
        i++;
      } else {
        i++;
      }
    }
    if (validateForm()) {
      Axios.post(`http://localhost:8080/College/add`, collegeData)
        .then((res) => {
          console.log(res.data);
          alert("New College Added...");
          handleRefresh();
          navigate("/AdminHome/add-college");
        })
        .catch((error) => {
          console.error("Error adding college:", error);
        });
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
      [id]: "",
    }));
  };

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <div className="add-user">
      <MDBContainer fluid>
        <MDBBreadcrumb className="add-breadcrumb" bold>
        <MDBBreadcrumbItem>
              <a href="/" className="text-reset">
                Home
              </a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/AdminHome/dashboard" className="text-reset">
                Dashboard
              </a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="" className="text-reset">
                College
              </a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/AdminHome/add-user" className="text-reset">
                <u>Add College</u>
              </a>
            </MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBContainer fluid className="heading">
          <h2 className="view-heading">Add College</h2>
          <NavLink to="/AdminHome/view-college" className="add-user-button">
            View College
          </NavLink>
        </MDBContainer>
        <MDBCol>
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol md="">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Name of College"
                      size="lg"
                      id="name"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.name}
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Name of the Contact Person'
                      size='lg'
                      id='contactName'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.contactName}
                    />
                    {errors.contactName && <div className="text-danger">{errors.contactName}</div>}
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
                <MDBRow>
                  <MDBCol md=''>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Affiliation'
                      size='lg'
                      id='affiliation'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.affiliation}
                    />
                    {errors.affiliation && <div className="text-danger">{errors.affiliation}</div>}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md=''>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Certification'
                      size='lg'
                      id='certification'
                      type='text'
                      onChange={handleChange}
                      value={collegeData.certification}
                    />
                    {errors.certification && <div className="text-danger">{errors.certification}</div>}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Year of Establishment"
                      size="lg"
                      id="establishmentYear"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.establishmentYear}
                    />
                    {errors.establishmentYear && (
                      <div className="text-danger">{errors.establishmentYear}</div>
                    )}
                  </MDBCol>
                 <MDBCol md="6">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a">
                        Select Courses
                      </MDBDropdownToggle>
                      <MDBDropdownMenu
                        style={{ overflow: "auto", maxHeight: "160px" }}
                      >
                        {course.map((_, index) => (
                          <div
                            key={index}
                            className="custom-control custom-checkbox"
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`courseCheckbox${index}`}
                              checked={
                                collegeData.collegeCourses[index]?.id !==
                                undefined
                              }
                              onChange={() =>
                                handleCourseChange(
                                  index,
                                  collegeData.collegeCourses[index]?.id
                                    ? undefined
                                    : index + 1
                                )
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`courseCheckbox${index}`}
                            >
                              {course[index]}
                            </label>
                            {/* {errors.collegeCourses && errors.collegeCourses[index] && (
          <div className="text-danger">{errors.collegeCourses[index]}</div>
        )} */}
                          </div>
                        ))}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBCol>
                  <MDBCol md="6">
                    {errors.collegeCourses && (
                      <div className="text-danger">{errors.collegeCourses}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <div style={{ float: 'left' }}>
                  <MDBBtn
                    className="w-10 mb-4"
                    color="success"
                    size="md"
                    type="submit"
                    value="Submit"
                  >
                    Submit
                  </MDBBtn>
                  <MDBBtn
                    className="w-10 mb-4"
                    style={{ marginLeft: '10px' }}
                    color="danger"
                    size="md"
                    type="reset"
                    value="reset"
                    onClick={handleRefresh}
                  >
                    Reset
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    </div>
  );
};

export default AddCollege;