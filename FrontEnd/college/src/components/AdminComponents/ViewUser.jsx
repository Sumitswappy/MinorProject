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
import "./ViewUser.css"; // Create a new CSS file for styling
import Axios from "axios";

const ViewUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [colId, setColId] = useState('');
  const url = "http://localhost:8080/user";
  const getQuery=`/get`;
  const getUrl=`${url}${getQuery}`;

  Axios.get(getUrl)
    .then((res) => {
      setUsers(res.data);
     
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
   /* const geturl = `http://localhost:8080/College/getByEmail?email=${users.email}`;
    Axios.get(geturl)
    .then((resp) => {
      setColId(resp.data);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });*/

const onHandleDelete = async (user) => {
  try {
    const delId = user.id;
    const delQuery = `/delete/${delId}`;
    const delUrl = `${url}${delQuery}`;

    // Delete user
    await Axios.delete(delUrl);
    alert("User deleted successfully.");

    // Fetch college ID
    const geturl = `http://localhost:8080/College/getByEmail?email=${user.email}`;
    const resp = await Axios.get(geturl);
    const collegeId = resp.data[0].id;
console.log("id:",collegeId);
    if (collegeId) {
      // Delete college
      const delColQuery = `/delete/${collegeId}`;
      const delColUrl = `http://localhost:8080/College${delColQuery}`;
      await Axios.delete(delColUrl);
    } else {
      alert("No college found for the user.");
    }
  } catch (error) {
    console.error("Error deleting user or college:", error);
  }
};

    const onHandleEdit = (user) => {
      console.log("Editing user:", user);
      const userId = user.id;
      console.log("User ID:", userId);
      navigate("/AdminHome/edit-user", { state: { id: userId } });
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
              User
            </a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <a href="/AdminHome/add-user" className="text-reset">
              <u>View User</u>
            </a>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBContainer fluid className="heading">
        <h2 className="view-heading">View User</h2>
          <NavLink to="/AdminHome/add-user" className="add-user-button">
            Add User
          </NavLink>
        </MDBContainer>
        <table className="table-container">
          <thead>
            <tr>
              <th className="table-header">SLNo.</th>
              <th className="table-header">First Name</th>
              <th className="table-header">Last Name</th>
              <th className="table-header">Email Id</th>
              <th className="table-header">Address</th>
              <th className="table-header">City</th>
              <th className="table-header">State</th>
              <th className="table-header">Mobile</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="table-row">
                <td className={user.isAdmin ? 'admin-user' : (user.isCollegeUser ? 'college-user' : '')}>{index + 1}</td>
                <td className={user.isAdmin ? 'admin-user-text' : ''}>
                  {user.firstName}
                </td>
                <td className={user.isAdmin ? 'admin-user-text' : ''}>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.phone}</td>
                <td>
                  <MDBDropdown className="btn-group">
                    <MDBBtn size="sm" color="success">
                      Action
                    </MDBBtn>
                    <MDBDropdownToggle color="success" outline split></MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem
                        link
                        onClick={() => onHandleEdit(user)}
                      >
                        Update User
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        link
                        onClick={() => onHandleDelete(user)}
                      >
                        Delete User
                      </MDBDropdownItem>
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

export default ViewUser;
