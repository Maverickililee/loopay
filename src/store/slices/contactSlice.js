import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    data: [],
  },
  reducers: {
    setContact: (state, action) => {
      state.data = action.payload.data;
    },
    hideContact: (state) => {
      state.data = [];
    },
  },
});

export const { setContact, hideContact } = contactSlice.actions;
export default contactSlice.reducer;
