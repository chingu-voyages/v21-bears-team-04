import axios from "axios";

const domain = "http://localhost";
const port = "3000";
const baseUrl = `${domain}:${port}`;

//axios.defaults.baseURL = `${domain}/${port}`;

// add fetch / axios methods here to retrieve data from our backend api

// example using fetch
export const getDashboard = async (token) => {
  // fetch all the activities for a particular user
  // retrieve the jwt token from local storage for authentication purposes

  const endpoint = `${baseUrl}/dashboard`;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  // add token if its passed into function
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(endpoint, {
    method: "get",
    headers: headers,
  });
  return response.json();
};

export const login = async (email, password) => {
  const url = `${baseUrl}/auth/signin`;
  const data = {
    email,
    password_digest: password,
  };

  return axios.post(url, data);
};
