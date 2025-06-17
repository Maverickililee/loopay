import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoading: false },
  reducers: {
    showLoading: (state) => {
      state.isLoading = true; // وضعیت بارگذاری فعال می‌شود
    },
    hideLoading: (state) => {
      state.isLoading = false; // وضعیت بارگذاری غیرفعال می‌شود
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
