import axios from "axios";

export const apiRequest = (method, path = "") => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client",
  };

  let reqOptions = {
    url: "http://localhost:3001/transactions/" + path,
    method: method,
    // headers: headersList,
  };

  return axios.request(reqOptions);
};
