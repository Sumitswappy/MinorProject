import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./CollegeRegister.css";

const CollegeRegister = () => {
  const [collegeData, setCollegeData] = useState({
    name: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    state: "",
    city: "",
    email: "",
    affiliation: "",
    certification: "",
    establishmentYear: "",
    collegeCourses: [],
    brochurefileUri: "",
    filename: "",
    collegeweb: "",
    applyweb: "",
    password: "",
    confirmPassword: "",
    useraddress: "",
    userstate: "",
    usercity: "",
  });
 
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/courses/get");
        setCourse(response.data.map((course) => course.course));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordFeedback, setPasswordFeedback] = useState([]);
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

 
  
  

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
  
    if (!collegeData.name.trim()) {
      newErrors.name = "*College name is required";
      valid = false;
    }
  
    if (!collegeData.firstName.trim()) {
      newErrors.firstName = "*Contact person first name is required";
      valid = false;
    }
  
    if (!collegeData.lastName.trim()) {
      newErrors.lastName = "*Contact person last name is required";
      valid = false;
    }
  
    if (
      !collegeData.phoneNumber.trim() ||
      !/^\d{10}$/.test(collegeData.phoneNumber.trim())
    ) {
      newErrors.phoneNumber = "*Valid 10-digit phone number is required";
      valid = false;
    }
    if (!collegeData.address.trim()) {
      newErrors.address = "*Address is required";
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
    
    }
  
    if (!collegeData.brochurefileUri.trim()) {
      newErrors.brochurefileUri = "*Brochure file URI is required";
      valid = false;
    }
  
    if (!collegeData.filename.trim()) {
      newErrors.filename = "*Filename is required";
      valid = false;
    }
  
    if (!collegeData.collegeweb.trim()) {
      newErrors.collegeweb = "*College website URL is required";
      valid = false;
    }
  
    if (!collegeData.applyweb.trim()) {
      newErrors.applyweb = "*Admission portal URL is required";
      valid = false;
    }
  
    if (!collegeData.useraddress.trim()) {
      newErrors.useraddress = "*User address is required";
      valid = false;
    }
  
    if (!collegeData.userstate.trim()) {
      newErrors.userstate = "*User state is required";
      valid = false;
    }
  
    if (!collegeData.usercity.trim()) {
      newErrors.usercity = "*User city is required";
      valid = false;
    }
    if (!/^.{8,}$/.test(collegeData.password.trim())) {
      newErrors.password = '*Password must be at least 8 characters';
      valid = false;
    }

    if (!collegeData.confirmPassword.trim()) {
      newErrors.confirmPassword = '*Confirm your password';
      valid = false;
    }

    if (collegeData.password !== collegeData.confirmPassword) {
      newErrors.confirmPassword = '*Password and confirm password do not match';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a brochure file");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    Axios.put("http://localhost:8080/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("File uploaded successfully:", res.data);
        console.log(res.data.fileDownloadUrl);
        setCollegeData((prevData) => ({
          ...prevData,
          brochurefileUri: res.data.fileDownloadUrl,
          filename: res.data.filename,
        }));
        setUploading(false);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setUploading(false);
      });
  };
 
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
 const handleCourseReset = () => {
    setCollegeData((prevData) => ({
      ...prevData,
      collegeCourses: [], // Reset selected courses
    }));
    
    setErrors((prevErrors) => ({
      ...prevErrors,
      collegeCourses: "", // Reset any errors related to course selection
    }));
  };
  function evaluatePasswordStrength(password) {
    let strength = '';
    const feedback = [];

    if (password.length < 8) {
      strength = 'Too Short';
      feedback.push('Password must be at least 8 characters long.');
    } else {
      if (!/[A-Z]/.test(password)) {
        feedback.push('Password should include at least one uppercase letter.');
      }
      if (!/[a-z]/.test(password)) {
        feedback.push('Password should include at least one lowercase letter.');
      }
      if (!/\d/.test(password)) {
        feedback.push('Password should include at least one number.');
      }
      if (!/[!@#$%^&*]/.test(password)) {
        feedback.push('Password should include at least one special character.');
      }

      if (feedback.length === 0) {
        strength = 'Strong';
      } else if (feedback.length <= 2) {
        strength = 'Medium';
      } else {
        strength = 'Weak';
      }
    }

    setPasswordStrength(strength);
    setPasswordFeedback(feedback);
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCollegeData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
     
    }));
    if (e.target.id === 'password') {
      evaluatePasswordStrength(e.target.value);
    }
 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(); // Call validateForm to check the form validity
  console.log("Final data:",collegeData);
    if (isValid) {
      // Proceed with Axios POST requests
      Axios.post("http://localhost:8080/College/add", collegeData)
        .then((res) => {
          Axios.post("http://localhost:8080/user/add", {
            firstName: collegeData.firstName,
            lastName: collegeData.lastName,
            address: collegeData.useraddress,
            city: collegeData.usercity,
            state: collegeData.userstate,
            phone: collegeData.phoneNumber,
            email: collegeData.email,
            password: collegeData.password,
            isCollegeUser: true,
          })
            .then((res) => {
              console.log(res.data);
              navigate("/Login");
            })
            .catch((error) => {
              console.error("Error submitting user form:", error);
            });
        })
        .catch((error) => {
          console.error("Error submitting college form:", error);
        });
    } else {
      console.log("Form validation failed");
    }
  };
  
  return (
    <div className="form-body">
      <div
        className="d-flex flex-row ps-5 pt-5"
        style={{ justifyContent: "center" }}
      >
        <div className="icon">
        <MDBIcon fas icon="book-open" size="3x" style={{ color: "#709085" }} />
        <span className="h1 fw-bold mb-0">Unifind.in</span>
        </div>
        
      </div>
      <MDBContainer fluid>
        <MDBRow className="justify-content-center align-items-center p-5">
        <MDBCol md='6'>
          <MDBCard>
            <MDBCardBody className="px-4">
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 " style={{ textDecoration: 'underline' }}>
                College Registration Form
              </h3>
              <form onSubmit={handleSubmit}>
              <hr/><h4><u>College Details:</u></h4><br/>
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
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Affiliation"
                      size="lg"
                      id="affiliation"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.affiliation}
                      
                    />
                    {errors.affiliation && (
                      <div className="text-danger">{errors.affiliation}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Address"
                      size="lg"
                      id="address"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.address}
                      
                    />
                    {errors.address && (
                      <div className="text-danger">{errors.address}</div>
                    )}
                  </MDBCol>
                  <MDBCol md="4">
                    <select
                      className="custom-select"
                      id="state"
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
                    {errors.state && (
                      <div className="text-danger">{errors.state}</div>
                    )}
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Select City"
                      size="lg"
                      id="city"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.city}
                      
                    />
                    {errors.city && (
                      <div className="text-danger">{errors.city}</div>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Certification"
                      size="lg"
                      id="certification"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.certification}
                      
                    />
                    {errors.certification && (
                      <div className="text-danger">{errors.certification}</div>
                    )}
                  </MDBCol>
                
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
                      <div className="text-danger">
                        {errors.establishmentYear}
                      </div>
                    )}
                  </MDBCol>
                  </MDBRow>
                  <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="College Website URL"
                      size="lg"
                      id="collegeweb"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.collegeweb}
                      
                    />
                    {errors.collegeweb && (
                      <div className="text-danger">{errors.collegeweb}</div>
                    )}
                  </MDBCol>
                
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Admission Portal URL,if any or else add the same URL"
                      size="lg"
                      id="applyweb"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.applyweb}
                      
                    />
                    {errors.applyweb && (
                      <div className="text-danger">
                        {errors.applyweb}
                      </div>
                    )}
                  </MDBCol></MDBRow>
                  <MDBRow>
                  <MDBCol md="">
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
                             {errors.collegeCourses && errors.collegeCourses[index] && (
          <div className="text-danger">{errors.collegeCourses[index]}</div>
        )} 
                          </div>
                        ))}
                         
                      </MDBDropdownMenu>
                    </MDBDropdown>
                    <MDBBtn
                    
                    
                    color="danger"
                    size="md"
                    type="button"
                    value="reset"
                    onClick={handleCourseReset}
                  >
                    Reset Courses
                  </MDBBtn>
                  </MDBCol>
                  <MDBCol md="6">
          <label className="form-label" htmlFor="brochureFile">
            College Brochure (PDF):
          </label>
          <input
            className="form-control mb-4"
            type="file"
            id="brochureFile"
            onChange={handleFileChange}
            accept=".pdf"
            required
          />
          {file && (
            <MDBBtn color="primary" onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload Brochure"}
            </MDBBtn>
          )}
        </MDBCol>
                  <MDBCol md="6">
                    {errors.collegeCourses && (
                      <div className="text-danger">{errors.collegeCourses}</div>
                    )}
                  </MDBCol>
                </MDBRow>
<hr/>
<h4><u>Contact Person Detail:</u></h4><br/>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First Name:"
                      size="lg"
                      id="firstName"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.firstName}
                      
                    />
                    {errors.firstName && (
                      <div className="text-danger">{errors.firstName}</div>
                    )}
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last Name:"
                      size="lg"
                      id="lastName"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.lastName}
                      
                    />
                    {errors.lastName && (
                      <div className="text-danger">{errors.lastName}</div>
                    )}
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Phone Number"
                      size="lg"
                      id="phoneNumber"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.phoneNumber}
                      
                    />
                    {errors.phoneNumber && (
                      <div className="text-danger">{errors.phoneNumber}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                <MDBCol md="4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Address"
                      size="lg"
                      id="useraddress"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.useraddress}
                      
                    />
                    {errors.address && (
                      <div className="text-danger">{errors.useraddress}</div>
                    )}
                  </MDBCol>
                  <MDBCol md="4">
                    <select
                      className="custom-select"
                      id="userstate"
                      onChange={handleChange}
                      value={collegeData.userstate}
                    >
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.userstate && (
                      <div className="text-danger">{errors.userstate}</div>
                    )}
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Select City"
                      size="lg"
                      id="usercity"
                      type="text"
                      onChange={handleChange}
                      value={collegeData.usercity}
                      
                    />
                    {errors.usercity && (
                      <div className="text-danger">{errors.usercity}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md="4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      size="lg"
                      id="email"
                      type="email"
                      onChange={handleChange}
                      value={collegeData.email}
                      
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      size="lg"
                      id="password"
                      type="password"
                      onChange={handleChange}
                      value={collegeData.password}
                      
                    />
                    {errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                    <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
                  {passwordStrength && <span>Password Strength: {passwordStrength}</span>}
                </div>
                <ul className="password-feedback">
                  {passwordFeedback.map((item, index) => (
                    <li key={index} className="text-danger">{item}</li>
                  ))}
                </ul>
                  </MDBCol>
                  <MDBCol md="4">
                  <MDBInput
                  wrapperClass='mb-4'
                  label='Confirm Password'
                  size="lg"
                  id='confirmPassword'
                  type='password'
                  onChange={handleChange}
                  value={collegeData.confirmPassword}
                />
                  </MDBCol>
                </MDBRow>
                
                <MDBBtn className="mb-4" size="lg" type="submit">
                  Submit
                </MDBBtn>
              </form>
              <p className='ms-5'>Already have an account? <a href="/Login" className="link-primary">Login here</a></p>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='d-none d-sm-block px-0'>
            <img src="https://img.buzzfeed.com/buzzfeed-static/complex/images/depg0oqo1inie9ifcg3d/most-beautiful-college-campuses-title.jpg?output-format=jpg&output-quality=auto" width={486} height={1060}
              alt="Login image" className="w-100" style={{borderRadius:'35px', objectFit: 'cover', objectPosition: 'center' }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default CollegeRegister;