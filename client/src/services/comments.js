import axios from "axios";

export const createComment = (data, token) => {
  const endpoint = "/api/comments";

  const { userId, activityId, content } = data;

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log("headers", headers);

  return axios.post(
    endpoint,
    {
      data: { userId, activityId, content },
    },
    { headers: headers }
  );
};
