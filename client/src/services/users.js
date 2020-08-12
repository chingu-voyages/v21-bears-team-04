import axios from "axios";

export const getUsers = (token) => {

  const endpoint = "https://fitx-chingu.herokuapp.com/api/users";

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return axios.get(endpoint, {
    headers: headers,
  });
};

