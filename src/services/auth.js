import axios from 'axios';

export const login = (email, password) => {
  const url = `https://fitx-chingu.herokuapp.com/api/auth/signin`;
  const data = {
    email,
    password_digest: password,
  };

  return axios.post(url, data);
};

export const register = (user) => {
  const { firstname, lastname, username, email, password } = user;
  const data = {
    first_name: firstname,
    last_name: lastname,
    username,
    email,
    password_digest: password,
  };
  console.log(data)
  const url = `https://fitx-chingu.herokuapp.com/api/auth/signup`
  console.log(url)
  return axios.post(url, data);
};
