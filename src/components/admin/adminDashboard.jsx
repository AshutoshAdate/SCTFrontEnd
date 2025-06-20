import React from 'react';
import Sidebar from './sidebar';
import ContactTable from './contactTable';
import './css/dashboard.css';

export const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.clear(); // or remove token only
    window.location.href = '/admin/login'; // or navigate programmatically
  };
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>User Queries</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <ContactTable />
      </main>
    </div>
  );
};

