import { SET_AUTH_INFO } from "../actions/types";

const initialState = {
  email: "",
  userId: "",
  username: "",
  loggedIn: false,
};

function auth(state = initialState, action) {
  switch (action.type) {
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
