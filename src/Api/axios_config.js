"use client"



import axios from "axios";


  axios.interceptors.request.use(
    (config) => {
      window.showLoading(true);

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      if (response.status == 200) {
        window.toggleShow(true, 1, response.data.message);
      }
  
      window.showLoading(false);
      return response;
    },
    (error) => {
      window.showLoading(false);
      if (error.code === "ECONNABORTED") {
        alert("دسترسی به اینترنت خود را بررسی کنید");
      }
      if (error.response && error.response.status === 401) {
        window.toggleShow(true, 3, "عدم دسترسی شما");
      }
      if (error.response && error.response.status === 500) {
        window.toggleShow(true, 2, "مشکلی پیش امده");
      }
      console.log(error);
      if (error.response && error.response.status === 400) {
        console.log("error 400")
        window.toggleShow(true, 2, error.response.data.message);
      }
      if (
        error.response &&
        error.response.status === 200 &&
        error.response.data.message
      ) {
        window.toggleShow(true, 1, error.response.data.message);
      }

      return Promise.reject(error);
    }
  );




