import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
  name: "isAuth",
  initialState: { isAuth: false, token: "" },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;
    },
    removeAuth: (state) => {
      state.isAuth = false;
      state.token = "";
    },
  },
});

// اکشن‌ها را اکسپورت کنید
export const { setAuth, removeAuth } = isAuthSlice.actions;

// ردیوسر را اکسپورت کنید
export default isAuthSlice.reducer;
