import {
  Success,
  Start,
  Fail,
  authSuccess,
  authFail,
  GetCurrentProfile,
} from "../slicer/authSlicer";
import { toast } from "react-toastify";
import { fetch } from "../../BaseUrl";
import axios from "axios";
import setAuthHeader from "../../helper/setAuthHeader";

export const Register = async (dispatch, { email, password, username }) => {
  dispatch(Start());
  try {
    const res = await fetch.post("/user/register", {
      email,
      password,
      username,
    });
    if (res.data.con) {
      dispatch(Success(res.data.result));
      return res.data.con;
    } else {
      dispatch(Fail());
      toast.error(res.data.msg);
      return res.data.con;
    }
  } catch (e) {
    dispatch(Fail());
    console.error(e);
  }
};

export const Login = async (dispatch, value) => {
  dispatch(Start());
  try {
    const res = await fetch.post("/user", { ...value });
    if (res.data.con) {
      const profile = await fetch("/profile/me", {
        headers: { Authorization: `Bearer ${res.data.result.token}` },
      });
      dispatch(GetCurrentProfile(profile.data.result));
      dispatch(authSuccess(res.data.result));
      localStorage.setItem("token", res.data.result.token);
      return res.data.con;
    } else {
      dispatch(authFail());
      toast.error(res.data.msg);
      localStorage.removeItem("token");
      return res.data.con;
    }
  } catch (e) {
    dispatch(authFail());
    toast.error(e.message);
    localStorage.removeItem("token");
    console.error(e);
  }
};

export const LoadAuth = async (dispatch, nav) => {
  if (localStorage.token) {
    setAuthHeader(localStorage.token);
  }
  dispatch(Start());
  try {
    const res = await axios.all([fetch("/user/auth"), fetch("profile/me")]);
    if (res[0].data.con && res[1].data.con) {
      dispatch(GetCurrentProfile(res[1].data.result));
      dispatch(authSuccess(res[0].data.result));
    } else {
      localStorage.removeItem("token");
      dispatch(authFail());
    }
  } catch (e) {
    localStorage.removeItem("token");
    dispatch(authFail());
  }
};

//profile creating
export const Create = async (dispatch, formData) => {
  dispatch(Start());
  try {
    const res = await fetch.post("/profile", { ...formData });
    if (res.data.con) {
      dispatch(GetCurrentProfile(res.data.result));
      toast.success("Complete Create Your Profile");
      return res.data.con;
    } else {
      dispatch(Fail());
      toast.error(res.data.msg);
      return res.data.con;
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

//profile updating
export const Edit = async (dispatch, fromData) => {
  dispatch(Start());
  try {
    const res = await fetch.patch("/profile/update", { ...fromData });
    console.log(res);
    if (res.data.con) {
      dispatch(GetCurrentProfile(res.data.result));
      toast.success("Profile update complete", { autoClose: 4000 });
      return res.data.con;
    } else {
      dispatch(Fail());
      toast.error(res.data.msg);
      return res.data.con;
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

//Add education
export const AddEdu = (formData) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch.post("/profile/edu", { ...formData });
    if (res.data.con) {
      dispatch(GetCurrentProfile(res.data.result));
      toast.success("Add education complete");
      return res.data.con;
    } else {
      dispatch(Fail());
      toast.error(res.data.msg);
      return res.data.con;
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

//Add experience
export const AddExp = (formData) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch.post("/profile/exp", { ...formData });
    if (res.data.con) {
      dispatch(GetCurrentProfile(res.data.result));
      toast.success("Add experience complete");
      return res.data.con;
    } else {
      dispatch(Fail());
      toast.error(res.data.msg);
      return res.data.con;
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

//logout
export const Logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(authFail());
};

//drop exp
export const dropExp = (id) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch.delete(`/profile/exp/${id}`);
    if (res.data.con) {
      dispatch(GetCurrentProfile(res.data.result));
      toast.success("Delete experience");
    } else {
      toast.error(res.data.msg);
      dispatch(Fail());
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

//drop edu
export const dropEdu = (id) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch.delete(`/profile/edu/${id}`);
    if (res.data.con) {
      dispatch(GetCurrentProfile(res.data.result));
      toast.success("Delete education");
    } else {
      toast.error(res.data.msg);
      dispatch(Fail());
    }
  } catch (e) {
    toast.error(e.message);
    dispatch(Fail());
  }
};

//deactivate
export const deactivate = () => async (dispatch) => {
  if (window.confirm("you want to deactivate account")) {
    dispatch(Start());
    try {
      const res = await fetch.delete("/profile");
      localStorage.removeItem("token");
      if (res.data.con) {
        dispatch(authFail());
        toast.success("complete deactivate");
      } else {
        toast.error(res.data.msg);
        dispatch(Fail());
      }
    } catch (e) {
      toast.error(e.message);
      dispatch(Fail());
    }
  } else {
    toast.warn("Be care man");
  }
};
