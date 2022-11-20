import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  count: 0,
  loading: false,
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    Start: (state, payload) => {
      state.loading = true;
    },
    GetAll: (state, { payload }) => {
      state.posts = payload.data;
      state.loading = false;
      state.count = payload.count;
    },
    paginate: (state, { payload }) => {
      state.posts = [...state.posts, ...payload];
      state.loading = false;
    },
    Fail: (state, action) => {
      state.posts = null;
      state.post = null;
      state.loading = false;
    },
  },
});

export const { GetAll, Fail, Start, paginate } = postSlicer.actions;
export default postSlicer.reducer;
