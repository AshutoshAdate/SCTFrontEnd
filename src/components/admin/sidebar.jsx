import React from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">Queries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
