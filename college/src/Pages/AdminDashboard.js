
import React from 'react';
import AdminSidenav from '../components/AdminSidenav';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <AdminSidenav />
      <Outlet/>
    </div>
  );
};

export default AdminDashboard;
