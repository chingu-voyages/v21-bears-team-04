//axios.defaults.baseURL = `${domain}/${port}`;

// add fetch / axios methods here to retrieve data from our backend api

// example using fetch
export const getDashboard = async (token) => {
  // fetch all the activities for a particular user
  // retrieve the jwt token from local storage for authentication purposes

  const endpoint = '/dashboard';

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  // add token if its passed into function
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(endpoint, {
    method: 'get',
    headers: headers,
  });
  return response.json();
};
