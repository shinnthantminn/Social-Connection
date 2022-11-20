import { fetch } from "../../BaseUrl";
import { toast } from "react-toastify";
import { GetAll, Fail, Start, paginate } from "../slicer/postSlicer";

export const AllPostGet = (page) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch(`/post/all/${page}`);
    if (res.data.con) {
      dispatch(GetAll({ data: res.data.result, count: res.data.msg }));
      return res.data;
    } else {
      toast.error(res.data.msg);
      dispatch(Fail());
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

export const AddPost = (item) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch.post("/post", { text: item });
    if (res.data.con) {
      return res.data;
    } else {
      toast.error(res.data.msg);
      dispatch(Fail());
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

export const InfinityScroll = (page) => async (dispatch) => {
  try {
    const res = await fetch(`/post/all/${page}`);
    if (res.data.con) {
      dispatch(paginate(res.data.result));
      return res.data;
    } else {
      toast.error(res.data.msg);
      dispatch(Fail());
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

export const Like = (con, page) => async (dispatch) => {
  try {
    const res = await fetch.post(`/post/like/${page}/${con}`);
    if (res.data.con) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

export const DeletePost = (id) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch.delete(`/post/${id}`);
    if (res.data.con) {
      return res.data;
    } else {
      toast.error(res.data.msg);
    }
  } catch (e) {
    toast.error(e.message);
  }
};

export const AddComment = (id, text) => async (dispatch) => {
  try {
    const res = await fetch.post(`post/comment/add/${id}`, { text });
    if (res.data.con) {
      return res.data;
    } else {
      toast.error(res.data.msg);
    }
  } catch (e) {
    toast.error(e.message);
  }
};

export const DropComment = (postId, cmtId) => async (dispatch) => {
  try {
    const res = await fetch.delete(`post/comment/drop/${postId}/${cmtId}`);
    if (res.data.con) {
      return res.data;
    } else {
      toast.error(res.data.msg);
      return res.data;
    }
  } catch (e) {
    toast.error(e.message);
  }
};
