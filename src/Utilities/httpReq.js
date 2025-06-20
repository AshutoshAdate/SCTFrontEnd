// src/axiosInstance.js
import axios from "axios";
import config from "../config";

let setGlobalLoading = null;

export const setLoaderCallback = (callBack) => {
    setGlobalLoading = callBack;
}
const BearerToekn = localStorage.getItem("token");
const httpReq = axios.create({
    baseURL: config.apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BearerToekn}`
    },
});

// Example interceptor to log requests
httpReq.interceptors.request.use(
    (config) => {
        if (setGlobalLoading) setGlobalLoading(true);
        return config;
    },
    (error) => {
        if (setGlobalLoading) setGlobalLoading(false);
        return Promise.reject(error);
    }
);

httpReq.interceptors.response.use(
    (response) => {
        if (setGlobalLoading) setGlobalLoading(false);
        return response;
    },
    (error) => {
        if (setGlobalLoading) setGlobalLoading(false);
        return Promise.reject(error);
    }
);

export default httpReq;
