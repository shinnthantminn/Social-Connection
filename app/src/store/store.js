import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicer/authSlicer";
import profileSlicer from "./slicer/profileSlicer";
import postSlicer from "./slicer/postSlicer";

const store = configureStore({
  reducer: {
    auth: authSlicer,
    profiles: profileSlicer,
    post: postSlicer,
  },
});

export default store;
