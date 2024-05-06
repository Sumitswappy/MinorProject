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
  MDBCardText,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from "mdb-react-ui-kit";
import "./UserProfile.css"; // Create a new CSS file for styling
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const UserProfile = ({ userId }) => {
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
  const [photoUrl, setPhotoUrl] = useState(null);
  useEffect(() => {
    if (location.state && location.state.id) {
      const userId = location.state.id;
      console.log("id",userId);
      const getQuery = `get/${userId}`;
      Axios.get(`${url}${getQuery}`).then((res) => {
        setUsers(res.data);
        setData(res.data);
        setPhotoUrl(res.data.profilephotoUri); // Set photoUrl after data state is updated
      })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [location]);

  const [file, setFile] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(false);
  

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    setShowUploadButton(true);
  };

  const uploadPhoto = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      Axios.put(`http://localhost:8080/files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          // Handle success
          console.log("Photo uploaded successfully");
          console.log(response.data);
  
          const fileDownloadUrl = response.data.fileDownloadUrl;
          const filename = response.data.filename;
  
          setPhotoUrl(fileDownloadUrl);
          setShowUploadButton(false);
  
          // Update profilephotoUri in the data state
          setData((prevData) => ({
            ...prevData,
            profilephotoUri: fileDownloadUrl,
          }));
  
          // Perform the PUT request to update user data with the photo URL
          const userId = data.id;
          const putQuery = `update/photo/${userId}`;
          const fullurl = `${url}${putQuery}`;
  
          Axios.put(fullurl, {
            firstName: data.firstName,
            lastName: data.lastName,
            city: data.city,
            state: data.state,
            phone: data.phone,
            email: data.email,
            isAdmin: data.isAdmin,
            password: null,
            photofile: filename,
            profilephotoUri: fileDownloadUrl,
          })
            .then((res) => {
              // Handle success
              console.log(res.data);
              console.log("User profile updated successfully");
            })
            .catch((error) => {
              // Handle error
              console.error("Error updating user profile:", error);
            });
        })
        .catch((error) => {
          // Handle error
          console.error("Error uploading photo:", error);
        });
    } else {
      console.error("No file selected");
    }
  };
  const onHandleEdit = () => {
    console.log("Editing user:", data);
    const userId = data.id;
    console.log("User ID:", userId);
    navigate("/editprofile", { state: { id: userId } });
  };
  
  
  return (
    
    <section className="body">
      <MDBContainer className="py-5">
      <Navbar/>
      <MDBRow md='6'>
          
        
          <MDBCol>
            <MDBBreadcrumb className="  rounded-3 p-3 mb-4 breadcrumb">
              <MDBBreadcrumbItem>
                <a href='/' className="home">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>My Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="">
            <MDBCard className=" bg-dark text-light mb-4 card">
              <MDBCardBody className="text-center" style={{ position: 'relative' }}>
              <a href={photoUrl} target="_blank" rel="noopener noreferrer">
                <div style={{ position: 'relative', width: '250px', height: '250px', display: 'inline-block' }}>
                  <MDBCardImage
                    src={photoUrl}
                    alt="avatar"
                    className="avatar"
                    style={{ width: '100%', height: '100%' }}
                    fluid />
                  <label htmlFor="fileInput" style={{ position: 'absolute', bottom: '0', right: '0' }} className="mt-2">
                    <MDBIcon id="profilephoto" fas icon="camera-retro" size='2x' />
                  </label>
                </div></a>
                <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
                {showUploadButton && (
                  <MDBBtn onClick={uploadPhoto} color="primary">Upload</MDBBtn>
                )}
                <hr />
                <h2 className="text-light mb-2">{data.firstName} {data.lastName} </h2>
                <p className="text-light mb-1">from {data.city}, {data.state}, India</p>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="bg-dark text-light p-5 mb-4">
              <MDBCardBody className="profiledet">
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-light">{data.firstName} {data.lastName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-light">{data.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-light">+91 {data.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-light">{data.address} , {data.city} , {data.state}</MDBCardText>
                  </MDBCol>
                </MDBRow><hr/>
                <MDBBtn
                    className="w-10 mb-4"
                    color="primary"
                    size="md"
                    onClick={onHandleEdit}
                  >
                    Edit Profile
                  </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default UserProfile;
