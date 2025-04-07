import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://evangadi-backend-33nv.onrender.com/api",
  // baseURL: "http://localhost:3456/api",
});

export default axiosInstance;
