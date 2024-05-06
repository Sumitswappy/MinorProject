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
    password: "",
    affiliation: "",
    certification: "",
    establishmentYear: "",
    collegeCourses: [],
    brochurefileUri: "",
    filename: "",
    collegeweb: "",
    applyweb: "",
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

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!collegeData.name.trim()) {
      newErrors.name = "*College name is required";
      valid = false;
    }

    if (!collegeData.firstName.trim()) {
      newErrors.firstName = "*Contact person name is required";
      valid = false;
    }
    if (!collegeData.lastName.trim()) {
      newErrors.lastName = "*Contact person name is required";
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

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (collegeData.brochurefileUri !== "" && collegeData.filename !== "") {
      Axios.post(`http://localhost:8080/College/add`, collegeData)
        .then((res) => {
          console.log("response:", res.data);
          alert("College added..");
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
              navigate("/");
            })
            .catch((error) => {
              console.error("Error submitting user form:", error);
            });
        })
        .catch((error) => {
          console.error("Error submitting college form:", error);
        });
    }
  }, [collegeData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a brochure file");
      return;
    }
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
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                    />
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
                      required
                    />
                    {errors.contactName && (
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                    {errors.usercity && (
                      <div className="text-danger">{errors.usercity}</div>
                    )}
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      size="lg"
                      id="email"
                      type="email"
                      onChange={handleChange}
                      value={collegeData.email}
                      required
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </MDBCol>

                  <MDBCol md="6">
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
                  </MDBCol>
                </MDBRow>
                
                <MDBBtn className="mb-4" size="lg" type="submit">
                  Submit
                </MDBBtn>
              </form>
              <p className='ms-5'>Already have an account? <a href="/Collegelogin" className="link-primary">Login here</a></p>
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



