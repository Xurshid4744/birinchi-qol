import axios from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    // Global error logging
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
