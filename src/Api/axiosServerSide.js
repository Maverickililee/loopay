import axios from "axios";

const axiosServerSide = axios.create({
  baseURL: "https://apiv2.halazoon.ir/", 
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json",
    Pragma: "no-cache",
    Expires: "0",
  },
});


axiosServerSide.interceptors.request.use((config) => {
  config.params = { ...config.params, t: new Date().getTime() }; 
  return config;
});

export default axiosServerSide;
