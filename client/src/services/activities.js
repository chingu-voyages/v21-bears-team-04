import axios from "axios";

export const createActivity = (token, activity) => {
  const endpoint = "/api/activities";

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return axios.post(endpoint, {
    headers: headers,
    data: activity,
  });
};
