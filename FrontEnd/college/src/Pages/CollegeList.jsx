import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,MDBCol
} from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import SidebarFilters from "../components/SideBarFilters";
import Navbar from "../components/Navbar.jsx";
import './CollegeList.css';
const CollegeList = () => {
  const [filters, setFilters] = useState({
    cityName: '',
    courseName: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const url = "http://localhost:8080/College/get-filtered"; 


  const searchdata = useLocation();
  const [collegeDetails, setCollegeDetails] = useState([]);

  useEffect(() => {
    const college = async () => {
      try {
        const query = `?cityName=${searchdata.state.cityName}&courseName=${searchdata.state.courseName}`;
        const fullUrl = `${url}${query}`;
        const response = await Axios.get(fullUrl);
        setCollegeDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    college();
  }, [searchdata]);

  return (
    <div style={{ display: 'flex' }}>
      <MDBContainer fluid>
      <Navbar/>
   <MDBRow>
    <MDBCol size='2'>
    <SidebarFilters onFilterChange={handleFilterChange} />
    </MDBCol>
      <MDBCol>
      <MDBContainer style={{ flex: 1, paddingLeft: '20px', marginTop: '75px' }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
          {collegeDetails.map((college, index) => (
            <MDBCard key={index} style={{ width: '75%', margin: '10px' }}>
              <MDBCardBody>
                <div style={{ display: "flex", justifyContent: "flex-start", border: "1px solid black", padding: '10px' }}>
                  <img
                    src="https://www.shutterstock.com/image-vector/university-logo-template-260nw-1253562811.jpg" // Replace with the actual URL or source for the college image
                    alt={`College ${index + 1}`}
                    style={{ width: '100px', height: '100px', marginRight: '10px',border: "1px solid black" }}
                  />
                  <div>
                    <MDBCardTitle>{college.college}</MDBCardTitle>
                    <MDBCardText className="cardTextStyle">
   {college.college} <br/>
   {college.cityEntity.cityName} <br/>
   {college.courseEntity.courseName}
</MDBCardText>

                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </MDBContainer>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    </div>
    
  );
};

export default CollegeList;
