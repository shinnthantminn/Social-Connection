import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: null,
  profile: null,
  isLoading: true,
  repo: {
    repoLoading: true,
    item: null,
  },
  count: 0,
};

const profileSlicer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    Start: (state, action) => {
      state.isLoading = true;
    },
    GetProfiles: (state, { payload }) => {
      state.profiles = payload.profile;
      state.isLoading = false;
      state.count = payload.count;
    },
    profilesFail: (state, action) => {
      state.profiles = null;
      state.isLoading = false;
      state.repo.item = null;
      state.count = 0;
    },
    profileFail: (state, action) => {
      state.profile = null;
      state.isLoading = false;
      state.repo.item = null;
    },
    perUser: (state, { payload }) => {
      state.profile = payload.profile;
      state.isLoading = false;
      state.count = payload.count;
    },
    gitHubStart: (state, action) => {
      state.repo.repoLoading = true;
    },
    github: (state, { payload }) => {
      state.repo.repoLoading = false;
      state.repo.item = payload;
    },
    logOut: (state, action) => {
      state.profiles = null;
      state.profile = null;
      state.isLoading = true;
      state.repo.item = null;
      state.repo.repoLoading = true;
      state.count = 0;
    },
    repoFail: (state, action) => {
      state.repo.repoLoading = false;
      state.repo.item = null;
    },
  },
});

export const {
  Start,
  GetProfiles,
  profilesFail,
  profileFail,
  logOut,
  perUser,
  github,
  repoFail,
  gitHubStart,
} = profileSlicer.actions;
export default profileSlicer.reducer;
