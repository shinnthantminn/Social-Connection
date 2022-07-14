import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./slicer/authSlicer";

const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
});

export default store;
