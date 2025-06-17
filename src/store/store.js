"use client";



import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import alertReducer from "./slices/alertSlice";
import contactReducer from "./slices/contactSlice";
import isAuthReducer from "./slices/isAuthSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    alert: alertReducer,
    contact: contactReducer,
    isAuth: isAuthReducer,
  },
});

export default store;
