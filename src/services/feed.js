import axios from 'axios';



export const getDashboard = (token) => {
  // fetch all the activities for a particular user
  // retrieve the jwt token from local storage for authentication purposes

  const endpoint = `https://fitx-chingu.herokuapp.com/api/dashboard`;

  // add token if its passed into function
  const headers = {

  }

  if (token) {
   headers["Authorization"] = `Bearer ${token}`;
  }
   
  
  return axios.get(endpoint, {
    headers: headers
  })
};
