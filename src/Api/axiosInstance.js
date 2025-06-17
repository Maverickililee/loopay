import axios from "axios";
import { showAlert } from "@/store/slices/alertSlice";
import { showLoading, hideLoading } from "@/store/slices/loadingSlice";
import store from "@/store/store";

const axiosInstance = axios.create({
  baseURL: "https://apiv2.halazoon.ir/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(showLoading());
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {

    if (response.status === 200 && response.config.method !== "get") {
      store.dispatch(
        showAlert({
          color: "#c7fcf0", 
          message: response.data.message || "عملیات با موفقیت انجام شد",
        })
      );
    }
   
    store.dispatch(hideLoading());
    return response;
  },
  (error) => {
    store.dispatch(hideLoading());

    if (error.code === "ECONNABORTED") {
      store.dispatch(
        showAlert({
          color: "#ffeaea", 
          message: "دسترسی به اینترنت خود را بررسی کنید",
        })
      );
    }
    if (error.response && error.response.status === 401) {
      store.dispatch(
        showAlert({
          color: "#ffeaea",
          message: "عدم دسترسی شما",
        })
      );
    }
    if (error.response && error.response.status === 500) {
      store.dispatch(
        showAlert({
          color: "#ffeaea",
          message: "مشکلی پیش امده",
        })
      );
    }
    if (error.response && error.response.status === 400) {
      store.dispatch(
        showAlert({
          color: "#fffddb",
          message: error.response.data.message || "خطای نامشخص",
        })
      );
    }
    if (
      error.response &&
      error.response.status === 200 &&
      error.response.data.message
    ) {
      store.dispatch(
        showAlert({
          color: "#c7fcf0",
          message: error.response.data.message,
        })
      );
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
