import axios from "axios";

// add fetch / axios methods here to retrieve data from our backend api

const domain = "localhost";
const port = "3000";
// example using fetch
export const getDashboard = async (userId, token) => {
  // fetch all the activities for a particular user
  // retrieve the jwt token from local storage for authentication purposes
  
  const endpoint = `http://${domain}:${port}/dashboard`;

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  // add token if its passed into function
  if (token) {
    headers["Authorization"] =  `Bearer ${token}`
  }
  const response = await fetch(endpoint, {
    method: "get",
    headers: headers
  });
  return response.json()
};
