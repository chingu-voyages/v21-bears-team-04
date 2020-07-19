import { SET_AUTH_INFO } from "./types";

export function setAuthInfo(authInfo) {
  return {
    type: SET_AUTH_INFO,
    payload: authInfo
  };
}
