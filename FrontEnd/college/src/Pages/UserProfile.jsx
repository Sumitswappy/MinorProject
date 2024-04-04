import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
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
} from "mdb-react-ui-kit";
import "./UserProfile.css"; // Create a new CSS file for styling
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/user/";
  const location = useLocation();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (location.state && location.state.id) {
      // Set data based on the location state
      // For example, you can fetch user details based on location.state.id
      const userId = location.state.id;
      const getQuery=`get/${userId}`;
      Axios.get(`${url}${getQuery}`).then((res) => {
        setUsers(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
    }
  }, [location]);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
 console.log(data);
 const userId = users.id;

  if (!users.id) {
    // Handle the case when the user ID is not available
    return (
      <div>
        <p>Error: User ID not available</p>
      </div>
    );
  }

 
  return (
    <div className="add-user">
        <MDBContainer fluid>
          
          <MDBContainer fluid className="heading">
        <h2 className="view-heading">My Profile</h2>
        </MDBContainer>
        <MDBContainer fluid className="profilephoto">
            box
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

                
                <div style={{ float: "left" }}>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      
    </div>
  );
};

export default UserProfile;
