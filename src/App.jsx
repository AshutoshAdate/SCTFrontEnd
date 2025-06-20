import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/admin/login";
import JsonData from "./data/data.json";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Donation } from "./components/donation";
import { Contact } from "./components/contact";
import { AdminDashboard } from "./components/admin/adminDashboard"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const MainContent = ({ data }) => (

  <>
    {/* <ToastContainer /> */}
    <Navigation />
    <Header data={data.Header} />
    <About data={data.About} />
    <Services data={data.Services} />
    <Gallery data={data.Gallery} />
    <Donation data={data.BankDetails} />
    <Contact data={data.Contact} />
  </>

);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const isAdmin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const roleClaim = decoded.role;
      const role = decoded.role
      return token && role === 'admin';
    }

  };

  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/" element={<MainContent data={landingPageData} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route
          path="/admin/dashboard"
          element={isAdmin() ? <AdminDashboard /> : <Navigate to="/admin/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
