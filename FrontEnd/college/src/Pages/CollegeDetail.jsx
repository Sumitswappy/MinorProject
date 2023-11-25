
import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { useParams } from "react-router-dom";
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBTabsItem, MDBTabsLink, MDBTabsContent,MDBTabsPane, MDBCard, MDBCardBody, MDBTabs } from "mdb-react-ui-kit";
import {  useLocation } from "react-router-dom";
import "./CollegeDetail.css";
const CollegeDetail = () => {
  const { id } = useParams();
  const [collegeData, setCollegeData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const url = "http://localhost:8080/College/"; 
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.id) {
      // Set data based on the location state
      // For example, you can fetch user details based on location.state.id
      const collegeId = location.state.id;
      const getQuery=`get/${collegeId}`;
      Axios.get(`${url}${getQuery}`).then((res) => {
        setCollegeData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
    }
  }, [location]);

  if (!collegeData) {
    return <div>Loading...</div>;
  }
console.log(collegeData.cityEntity.cityName);
  // State to manage the active tab

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <h2>Overview</h2>
            <p>
              <strong>Name:</strong> {collegeData.college}
            </p>
            <p>
              <strong>Location:</strong> {collegeData.cityEntity.cityName}
            </p>
            <p>
              <strong>Affiliation:</strong> {collegeData.affiliation}
            </p>
            <p>
              <strong>Certification:</strong> {collegeData.certification}
            </p>
          </div>
        );
      case "placements":
        return (
          <div>
            <h2>Placements</h2>
            <ul>
              {collegeData.placements.map((placement) => (
                <li key={placement.year}>
                  {placement.year}: {placement.percentage}%
                </li>
              ))}
            </ul>
          </div>
        );
      case "reviews":
        return (
          <div>
            <h2>Student Reviews</h2>
            <ul>
              {collegeData.reviews.map((review) => (
                <li key={review.id}>
                  <p>{review.text}</p>
                  <p>Rating: {review.rating}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
     <Navbar/>
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol>
          <MDBCard style={{ flex: 1, paddingLeft: '20px', marginTop: '75px' }}>
            <MDBCardBody className="college-detail-card">
              <h1>{collegeData.college}</h1>

              {/* Navigation buttons */}
              <MDBTabs pills justify className='mb-3'>
                <MDBTabsItem>
                  <MDBTabsLink
                    active={activeTab === "overview"}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    active={activeTab === "placements"}
                    onClick={() => setActiveTab("placements")}
                  >
                    Placements
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    active={activeTab === "reviews"}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              {/* Render the content based on the active tab */}
              {renderContent()}

              {/* Apply Now and Download Brochure buttons */}
              <div className="action-buttons">
                <button className="btn btn-primary">Apply Now</button>
                <button className="btn btn-secondary">Download Brochure</button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

// Export the component for use in other parts of your application
export default CollegeDetail;
