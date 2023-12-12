import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn
} from "mdb-react-ui-kit";
import{NavLink} from "react-router-dom";
import "./ViewCollege.css";
import Axios from "axios";

const ViewCollege = () => {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState([]);
  const url = "http://localhost:8080/College/";

  Axios.get(`${url}get`)
    .then((res) => {
      console.log(res.data);
      setColleges(res.data);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });


    const onHandleDelete=(e)=>{
      const delId=e.id;
      const delQuery=`delete/${delId}`;
  const delUrl=`${url}${delQuery}`;
  Axios.delete(delUrl)
    .then((res) => {
      alert("College deleted...");
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
    }

    const onHandleEdit = (e) => {
      const collegeId = e.id;
      alert(collegeId);
      navigate("/AdminHome/edit-user", { state: { id:collegeId } });
    };
  return (
    <div className="view-user">
      <MDBContainer fluid>
        <MDBBreadcrumb className="view-breadcrumb" bold>
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
              <u>View College</u>
            </a>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBContainer fluid className="heading">
        <h2 className="view-heading">View College</h2>
          <NavLink to="/AdminHome/add-college" className="add-user-button">
            Add College
          </NavLink>
        </MDBContainer>
        <table className="table-container">
          <thead>
            <tr>
              <th className="table-header">SLNo.</th>
              <th className="table-header">College Name</th>
              <th className="table-header">Contact Person</th>
              <th className="table-header">City</th>
              <th className="table-header">State</th>
              <th className="table-header">Affiliation</th>
              <th className="table-header">Certification</th>
              <th className="table-header">Establishment Year</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college,index) => (
              <tr key={college.id} className="table-row">
                <td>{index+1}</td>
                <td>{college.name}</td>
                <td>{college.contactName}</td>
                <td>{college.city}</td>
                <td>{college.state}</td>
                <td>{college.affiliation}</td>
                <td>{college.certification}</td>
                <td>{college.establishmentYear}</td>
                <td>
                  <MDBDropdown className="btn-group">
                    <MDBBtn size="sm" color="success">
                      Action
                    </MDBBtn>
                    <MDBDropdownToggle
                      color="success"
                      outline
                      split
                    ></MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {/* <MDBDropdownItem link onClick={()=>onHandleEdit(college)}>Update College</MDBDropdownItem> */}
                      <MDBDropdownItem link onClick={()=>onHandleDelete(college)}>Delete College</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MDBContainer>
    </div>
  );
};

export default ViewCollege;
