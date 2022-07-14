import {
  Success,
  Fail,
  Start,
  authSuccess,
  authFail,
} from "../slicer/authSlicer";
import { toast } from "react-toastify";
import { fetch } from "../../BaseUrl";
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
      dispatch(authSuccess(res.data.result));
      localStorage.setItem("token", res.data.result.token);
      return res.data.con;
    } else {
      dispatch(Fail());
      toast.error(res.data.msg);
      localStorage.removeItem("token");
      return res.data.con;
    }
  } catch (e) {
    dispatch(Fail());
    toast.error(e.message);
    localStorage.removeItem("token");
    console.error(e);
  }
};

export const LoadAuth = async (dispatch) => {
  if (localStorage.token) {
    setAuthHeader(localStorage.token);
  }
  dispatch(Start());
  try {
    const res = await fetch("/user/auth");
    if (res.data.con) {
      dispatch(authSuccess(res.data.result));
    } else {
      localStorage.removeItem("token");
      dispatch(authFail());
    }
  } catch (e) {
    localStorage.removeItem("token");
    dispatch(authFail());
  }
};
