import { fetch } from "../BaseUrl";

const setAuthHeader = (token) => {
  if (token) {
    fetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete fetch.defaults.headers.common["Authorization"];
  }
};

export default setAuthHeader;
