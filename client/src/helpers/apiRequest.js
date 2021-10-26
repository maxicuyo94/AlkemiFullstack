import axios from "axios";

export const apiRequest = (method = "GET", path = "", data = {}) => {
  let reqOptions = {
    url: "http://localhost:3001/transactions/" + path,
    method,
    data,
  };

  return axios.request(reqOptions);
};
