import axios from "axios";
const BaseURL = "https://social-connection64.herokuapp.com/api/v1";
const LocalURL = "http://127.0.0.1:4000/api/v1";

export const fetch = axios.create({
  baseURL: BaseURL,
});
