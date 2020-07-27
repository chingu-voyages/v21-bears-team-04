import { SET_AUTH_INFO, CLEAR_AUTH_INFO, AUTH_ERROR } from './types';
import api from '../services';

export function setAuthInfo(authInfo) {
  return {
    type: SET_AUTH_INFO,
    payload: authInfo,
  };
}

export const signIn = (credentials) => async (dispatch) => {
  const { email, password } = credentials;

  try {
    const res = await api.auth.login(email, password);
    // if (data.error) throw new Error(data.message);
    const {
      token,
      userData: { id, username, userEmail },
    } = res.data;

    const authInfo = {
      userId: id,
      username,
      email: userEmail,
      token,
    };

    dispatch({ type: SET_AUTH_INFO, payload: authInfo });
  } catch (err) {
    console.log('error message', err.message);
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};

export const signUp = (user) => async (dispatch) => {
  try {
    const res = await api.auth.register(user);

    const {
      token,
      userData: { id, username, userEmail },
    } = res.data;

    const authInfo = {
      userId: id,
      username,
      email: userEmail,
      token,
    };

    dispatch({ type: SET_AUTH_INFO, payload: authInfo });
  } catch (err) {
    console.log('error message', err.message);
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};
