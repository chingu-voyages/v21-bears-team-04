import axios from "axios";

export const createFollowing = (user, token) => {
  const endpoint = "https://fitx-chingu.herokuapp.com/api/following";

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log("headers", headers);

  return axios.post(
    endpoint,
    {
      data: user,
    },
    { headers: headers }
  );
};