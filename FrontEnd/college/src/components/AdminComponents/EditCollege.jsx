import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
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

const EditCollege = () => {
    const navigate = useNavigate();
    const url = "http://localhost:8080/College/";
    const location = useLocation();
    const [college, setCollege] = useState([]);
  const [collegeData, setCollegeData] = useState({
    name: "",
    contactName: "",
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
  
    if (location.state && location.state.id) {
      const colId = location.state.id;
      console.log(colId);
      
      const getQuery=`get/${location.state.id}`;
      Axios.get(`${url}${getQuery}`).then((res) => {
        setCollege(res.data);
        setCollegeData({
          ...res.data,
          collegeCourses: res.data.collegeCourses.map(course => ({ id: course.id }))
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    }
  }, [location]);
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
  /*const handleCourseChange = (courseId) => {
    setCollegeData((prevData) => {
      const updatedCourses = [...prevData.collegeCourses];
      const existingIndex = updatedCourses.findIndex(course => course.id === courseId);
      if (existingIndex !== -1) {
        updatedCourses.splice(existingIndex, 1); // If already present, remove it
      } else {
        updatedCourses.push({ id: courseId }); // If not present, add it
      }
      return {
        ...prevData,
        collegeCourses: updatedCourses,
      };
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      collegeCourses: "",
    }));
  };*/
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
  
  
  

  const colId = college.id;
  const putQuery=`update/${colId}`;
  const fullurl=`${url}${putQuery}`;
  console.log(fullurl);
  
 
   if (!college.id) {
     // Handle the case when the user ID is not available
     return (
       <div>
         <p>Error: User ID not available</p>
       </div>
     );
   }
 
   console.log("Data:", collegeData);

 
let i=0;

/*const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    console.log("Courses:", collegeData.collegeCourses);
    Axios.put(fullurl, 
        {name: collegeData.name,
            contactName: collegeData.contactName,
            state: collegeData.state,
            city: collegeData.city,
            email: collegeData.email,
            password: collegeData.password,
            affiliation: collegeData.affiliation,
            certification: collegeData.certification,
            establishmentYear: collegeData.establishmentYear,
            collegeCourses: collegeData.collegeCourses,}
    )
      .then((res) => {
        console.log("Response:", res.data);
        alert("Updated...");
        navigate("/AdminHome/view-college");
      })
      .catch((error) => {
        console.error("Error updating college:", error);
        alert("Error updating college. Please check the console for details.");
      });
  };*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    console.log("Data to be sent:", collegeData);
    Axios.put(fullurl, collegeData)
      .then((res) => {
        console.log("Response:", res.data);
        alert("Updated...");
        navigate("/AdminHome/view-college");
      })
      .catch((error) => {
        console.error("Error updating college:", error);
        alert("Error updating college. Please check the console for details.");
      });
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
                <u>Edit College</u>
              </a>
            </MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBContainer fluid className="heading">
          <h2 className="view-heading">Edit College</h2>
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

                  {/*<MDBCol md='6'>
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
                  </MDBCol>*/}
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

export default EditCollege;