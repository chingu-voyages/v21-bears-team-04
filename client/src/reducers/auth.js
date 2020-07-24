import { SET_AUTH_INFO, AUTH_ERROR } from "../actions/types";

const initialState = {
  email: "",
  userId: "",
  username: "",
  loggedIn: false,
  error: false
};

function auth(state = initialState, action) {
  switch (action.type) {
    
    case AUTH_ERROR:

       return {
         ...state,
         error: true
       }

    case SET_AUTH_INFO:
      const { payload } = action;
      // if there's an auth token, save it in local storage
      if (payload.token) localStorage.setItem("fitXToken", payload.token);

      return {
        ...state,
        email: payload.email,
        userId: payload.userId,
        username: payload.username,
        loggedIn: true,
        token: payload.token,
      };
    default:
      return state;
  }
}

export default auth;
