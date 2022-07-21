import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: null,
  profile: null,
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
    Fail: (state, { payload }) => {
      state.isLoading = false;
    },
    authSuccess: (state, { payload }) => {
      state.isAuthentication = true;
      state.isLoading = false;
      state.data = payload;
    },
    GetCurrentProfile: (state, { payload }) => {
      state.profile = payload;
      state.isLoading = false;
    },
    authFail: (state, { payload }) => {
      state.isAuthentication = false;
      state.data = null;
      state.profile = null;
      state.isLoading = false;
    },
  },
});

export const {
  Success,
  Start,
  Fail,
  authFail,
  authSuccess,
  GetCurrentProfile,
} = authSlicer.actions;
export default authSlicer.reducer;
