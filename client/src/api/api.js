import axios from "axios";

// add fetch / axios methods here to retrieve data from our backend api

const domain = "localhost";
const port = "3000";

const getJournal = async userId => {
  // fetch example
  // retrieve the jwt token from local storage for authentication purposes
  const token = localStorage.getItem("fitXToken");
  const endpoint = `http://${domain}:${port}/users/${userId}/activities`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  };
  const response = await fetch(endpoint, {
    method: "get",
    headers: headers
  });
  return response;
};
