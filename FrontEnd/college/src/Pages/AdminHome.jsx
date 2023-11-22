import React from "react";
import { Outlet } from "react-router-dom";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import AdminSidenav from "../components/AdminComponents/AdminSidenav";

const AdminHome = () => {
  return (
    <MDBRow>
      <MDBCol size='2'>
        <AdminSidenav />
      </MDBCol>
      <MDBCol>
        <Outlet />
      </MDBCol>
      
    </MDBRow>
  );
};

export default AdminHome;
