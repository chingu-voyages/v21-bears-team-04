import { SET_USERS, ADD_USER, REMOVE_USER } from "./types";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const removeUser = (userId) => {
  return {
    type: REMOVE_USER,
    payload: userId,
  };
};