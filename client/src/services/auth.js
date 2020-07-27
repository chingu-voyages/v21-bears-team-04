import axios from 'axios';

export const login = (email, password) => {
  const url = `/auth/signin`;
  const data = {
    email,
    password_digest: password,
  };

  return axios.post(url, data);
};
