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
  });

  const navigate = useNavigate();
  const handleFilterChange = (newFilters) => {
    setSearchData({ state: undefined });
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      city: '',
      course: '',
      state: '',
      fees: ''
    });
  };

  useEffect(() => {
    window.onload = resetFilters; // Reset filters when window is reloaded
  }, []);

  const url = "http://13.202.120.24:8080/College/get-filtered";
  const url2 = "http://13.202.120.24:8080/College/get";

  const [searchdata, setSearchData] = useState(useLocation());
  const [collegeDetails, setCollegeDetails] = useState([]);

  useEffect(() => {
    const college = async () => {
      try {
        let response;
        if (!searchdata.state) {
          if (!filters.city && !filters.course && !filters.state) {
            response = await Axios.get(url2);
          }  else if (filters.course && !filters.city && !filters.state) {
            response = await Axios.get(`http://13.202.120.24:8080/College/byCourse/${filters.course}`);
          } else if (filters.city && !filters.state && !filters.course) {
            response = await Axios.get(`http://13.202.120.24:8080/College/byCity/${filters.city}`);
          } else if (filters.state && !filters.course && !filters.city) {
            response = await Axios.get(`http://13.202.120.24:8080/College/byState/${filters.state}`);
          }
          else if (filters.city && filters.course && !filters.state)
          {
            const query = `?city=${filters.city || ''}&course=${filters.course || ''}`;
            const fullUrl = `${url}${query}`;
            response = await Axios.get(fullUrl);
            console.log("Query: ", query);
          }
          else {
            const query = `?city=${filters.city || ''}&course=${filters.course || ''}`;
            const fullUrl = `${url}${query}`;
            response = await Axios.get(fullUrl);
            console.log("Query: ", query);
          }
        }
        else if (searchdata.state.courseName && !searchdata.state.cityName) {
          console.log("Using searchdata state: ", searchdata.state);
          response = await Axios.get(`http://13.202.120.24:8080/College/byCourse/${searchdata.state.courseName}`);
        }
         else {
          const query = `?city=${searchdata.state.cityName || ''}&course=${searchdata.state.courseName || ''}`;
          const fullUrl = `${url}${query}`;
          response = await Axios.get(fullUrl);
          console.log("Query: ", query);
        }
        console.log("Response: ", response);
        setCollegeDetails(response.data);
      } catch (error) {
        console.log("Error: ", error);
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
  const renderStars = rating => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star gold-star"></i>);
    }
    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt gold-star"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star gold-star"></i>);
    }

    return stars;
  };
  return (
    <div className='college-body'>
      <MDBContainer className='college-container' fluid>
        <Navbar />
        <MDBRow>
          <MDBCol size='2'>
            <SidebarFilters onFilterChange={handleFilterChange} />
          </MDBCol>
          <MDBCol>
            <MDBContainer style={{ flex: 1, paddingLeft: '20px', marginTop: '75px' }} fluid>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                {collegeDetails.map((college, index) => (
                  <MDBCard key={index} style={{ width: '75%', margin: '10px' }}>
                    <MDBCardBody style={{ backgroundImage: `url(${college.coverphotoUri})`, backgroundSize: 'cover', borderRadius: '40px' }}>
                      <div style={{ display: "flex", justifyContent: "flex-start",  padding: '20px', background: '#ffffff30',borderRadius: '20px', color: 'white' }}>
                        <img
                          src={college.profilephotoUri}
                          alt={`College ${index + 1}`}
                          style={{ width: '100px', height: '100px', marginRight: '10px', border: "1px solid black" }}
                        />
                        <div>
                          <MDBCardTitle><h4><strong>{college.name}</strong></h4></MDBCardTitle>
                          <MDBCardText className="cardTextStyle">
                            {college.state} <br />
                            {college.city} <br />
                            {college.establishmentYear}<br />
                            <p className="card-text">
                  Rating: {renderStars(college.rating)}
                </p><br/>
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
