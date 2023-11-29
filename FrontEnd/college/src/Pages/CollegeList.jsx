import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import SidebarFilters from "../components/SideBarFilters";
import Navbar from "../components/Navbar.jsx";
import './CollegeList.css';

const CollegeList = () => {
  const [filters, setFilters] = useState({
    city: '',
    course: '',
    state: '',
    fees: ''
  });

  const navigate = useNavigate();
  const handleFilterChange = (newFilters) => {
    setSearchData({ state: undefined });
    setFilters(newFilters);
    
  };

  const url = "http://localhost:8080/College/get-filtered";
  const url2 = "http://localhost:8080/College/get";

  const [searchdata, setSearchData] = useState(useLocation());
  const [collegeDetails, setCollegeDetails] = useState([]);

  useEffect(() => {
    const college = async () => {
      try {
        let response;
        if(!searchdata.state){
        if (!filters.city && !filters.course && !filters.state) {
          // If no filters are selected, fetch all colleges
          response = await Axios.get(url2);
        } else if (!filters.city && !filters.state) {
          // Use the correct filter names here
          response = await Axios.get(`http://localhost:8080/College/byCourse/${filters.course}`);
        } else if(filters.city)
        {
          response = await Axios.get(`http://localhost:8080/College/byCity/${filters.city}`);
        } else if(filters.state){
          response = await Axios.get(`http://localhost:8080/College/byState/${filters.state}`);
        }
        else {
          // If filters are selected, construct the query string
          const query = `?city=${filters.city || ''}&course=${filters.course || ''}`;
          const fullUrl = `${url}${query}`;
          response = await Axios.get(fullUrl);
          console.log(query);
        }
      }
      else{
        const query = `?city=${searchdata.state.cityName || ''}&course=${searchdata.state.courseName || ''}`;
          const fullUrl = `${url}${query}`;
          response = await Axios.get(fullUrl);
          console.log(query);
      }
    
        setCollegeDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    college();
  }, [searchdata, filters]);

  const onHandle = (college) => {
    if (sessionStorage.getItem("email") != null) {
      console.log("Editing user:", college);
      const collegeId = college.id;
      console.log("College ID:", collegeId);
      navigate("/CollegesProfile", { state: { id: collegeId } });
    } else {
      navigate("/login");
      alert("Please Log In...");
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <MDBContainer fluid>
        <Navbar />
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
                          src="https://www.shutterstock.com/image-vector/university-logo-template-260nw-1253562811.jpg"
                          alt={`College ${index + 1}`}
                          style={{ width: '100px', height: '100px', marginRight: '10px', border: "1px solid black" }}
                        />
                        <div>
                          <MDBCardTitle><h5><strong>{college.name}</strong></h5></MDBCardTitle>
                          <MDBCardText className="cardTextStyle">
                            {college.state} <br />
                            {college.city} <br />
                            {college.establishmentYear}<br />
                            <button className="btn btn-primary" onClick={() => onHandle(college)}>View Details</button>
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
