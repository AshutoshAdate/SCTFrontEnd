// src/config.js

const config = {
  // apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "https://sctwebapi-huesgzhsfbfug5dd.centralindia-01.azurewebsites.net/api",
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL_LOCAL || "https://localhost:7014/api",
  // Add other values as needed
  appName: "Sri Chintamani Trust",
  enableLogging: true,
  localClientUrl: process.env.REACT_APP_CLIENT_BASE_URL || "http://localhost:3000"
};

export default config;
