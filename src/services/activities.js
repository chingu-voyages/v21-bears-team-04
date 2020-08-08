import axios from "axios";

export const createActivity = (activity, token) => {
  const endpoint = "https://fitx-chingu.herokuapp.com/api/activities";

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log("headers", headers);

  return axios.post(
    endpoint,
    {
      data: activity,
    },
    { headers: headers }
  );
};

export const deleteActivity = (activityId, token) => {
  const endpoint = "/api/activities";

  // add token if its passed into function
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log("headers", headers);

  return axios.delete(endpoint, {
    data: { activityId: activityId },
    headers: headers,
  });
};
