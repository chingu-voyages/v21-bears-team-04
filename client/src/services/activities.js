import axios from "axios";

export const createActivity = (activity, token) => {
  const endpoint = "/api/activities";

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log("headers", headers)

  return axios.post(endpoint, {
    data: activity,
  },  {headers: headers});
};  
