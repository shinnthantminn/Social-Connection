import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: null,
  isAuthentication: false,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Start: (state, action) => {
      state.isLoading = true;
    },
    Success: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    Fail: (state, action) => {
      state.isLoading = false;
    },
    authSuccess: (state, { payload }) => {
      state.isAuthentication = true;
      state.isLoading = false;
      state.data = payload;
    },
    authFail: (state, action) => {
      state.isAuthentication = false;
      state.isLoading = false;
    },
  },
});

export const { Success, Start, Fail, authFail, authSuccess } =
  authSlicer.actions;
export default authSlicer.reducer;
