import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import httpReq from '../../Utilities/httpReq'


export const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    passwordHash: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      debugger;
      const url = `User/login`;
      const payload = {
        userName: formData.userName,
        password: formData.passwordHash
      };

      const res = await httpReq.post(url, payload);
      const token = res.data.token;
      if (token) {
        // localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        const roleClaim = decoded.role;
        // const roleClaim = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if (roleClaim == "admin") {
          // localStorage.setItem('role', roleClaim);
          localStorage.setItem('token', token)
          window.location.href = `/${roleClaim.toLowerCase()}/dashboard`;
          toast.success('Logged in successfuly');
        } else {
          toast.error('You do not have an admin access');
        }
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Something went wrong!');

    } finally {
      setLoading(false);
    }
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: loading ? '#6c757d' : '#007bff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: loading ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <>
      <div id="login">
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            placeholder="User Name"
            type="userName"
            value={formData.userName}
            onChange={handleChange('userName')}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.passwordHash}
            onChange={handleChange('passwordHash')}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
      </div>
    </>
  );
};
