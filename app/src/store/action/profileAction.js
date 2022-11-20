import {
  Start,
  GetProfiles,
  profilesFail,
  perUser,
  github,
  repoFail,
  gitHubStart,
} from "../slicer/profileSlicer";
import { fetch } from "../../BaseUrl";
import { toast } from "react-toastify";

// get all profiles
export const getAll = (payload) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch(`profile/all/${payload}`);
    if (res.data.con) {
      dispatch(GetProfiles({ profile: res.data.result, count: res.data.msg }));
    }
  } catch (e) {
    dispatch(profilesFail());
    toast.error(e.message);
  }
};

//get profile by id
export const getById = (payload) => async (dispatch) => {
  dispatch(Start());
  try {
    const res = await fetch(`profile/${payload}`);
    if (res.data.con) {
      dispatch(perUser({ profile: res.data.result, count: 0 }));
    }
  } catch (e) {
    dispatch(profilesFail());
    toast.error(e.message);
  }
};

//GitHub profile action
export const githubUser = (payload) => async (dispatch) => {
  dispatch(gitHubStart());
  try {
    const res = await fetch(`profile/github/${payload}`);
    if (res.data.con) {
      dispatch(github(res.data.result));
    } else {
      dispatch(repoFail());
    }
  } catch (e) {
    dispatch(repoFail());
    toast.error(e.message);
  }
};
