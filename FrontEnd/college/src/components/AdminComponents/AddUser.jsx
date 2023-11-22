import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./AddUser.css"; // Create a new CSS file for styling
import {NavLink} from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/user/add";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    password: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      state: data.state,
      phone: data.phone,
      email: data.email,
      password: data.password,
    }).then((res) => {
      alert("New User Added...");
      handleRefresh();
      navigate("/AdminHome/add-user");
    });
  }
  

  function handleRefresh(){
    window.location.reload();
  };
  return (
    <div className="add-user">
      <form onSubmit={(e) => submit(e)}>
        <MDBContainer fluid>
          <MDBBreadcrumb className="add-breadcrumb" bold>
            <MDBBreadcrumbItem>
              <a href="/AdminHome" className="text-reset">
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
                User
              </a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/AdminHome/add-user" className="text-reset">
                <u>Add User</u>
              </a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <MDBContainer fluid className="heading">
        <h2 className="view-heading">Add User</h2>
          <NavLink to="/AdminHome/view-user" className="add-user-button">
            View User
          </NavLink>
        </MDBContainer>
          <MDBCol >
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="firstName"
                      type="text"
                      onChange={(e) => handle(e)}
                      value={data.firstName}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="lastName"
                      type="text"
                      onChange={(e) => handle(e)}
                      value={data.lastName}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="email"
                  type="email"
                  onChange={(e) => handle(e)}
                  value={data.email}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Mobile No."
                  id="phone"
                  type="text"
                  onChange={(e) => handle(e)}
                  value={data.phone}
                />

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="City"
                      id="city"
                      type="text"
                      onChange={(e) => handle(e)}
                      value={data.city}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="State"
                      id="state"
                      type="text"
                      onChange={(e) => handle(e)}
                      value={data.state}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                  onChange={(e) => handle(e)}
                  value={data.password}
                />
                <div style={{ float: "left" }}>
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
                    style={{ marginLeft: "10px" }}
                    color="danger"
                    size="md"
                    type="reset"
                    value="reset"
                  >
                    Reset
                  </MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      </form>
    </div>
  );
};

export default AddUser;
