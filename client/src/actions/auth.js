import { SET_AUTH_INFO, CLEAR_AUTH_INFO, AUTH_ERROR } from "./types";
import { login } from "../api/api";

export function setAuthInfo(authInfo) {
  return {
    type: SET_AUTH_INFO,
    payload: authInfo,
  };
}



export function signIn(credentials) {
  const { email, password } = credentials;
  return async function (dispatch) {
    try {
      const data = (await login(email, password)).data;
      if (data.error) throw new Error(data.message)
      const {
        token,
        userData: { id, username, userEmail },
      } = data;

      const authInfo = {
        userId: id,
        username: username,
        email: userEmail,
        token: token
      };
      dispatch({ type: SET_AUTH_INFO, payload: authInfo });
    } catch (err) {
      console.log("error message", err.message);
      dispatch({type: AUTH_ERROR, payload: err.message})
    }
  };
}
