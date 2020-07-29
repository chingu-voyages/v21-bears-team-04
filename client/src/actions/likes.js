
import {SET_LIKES, ADD_LIKE, REMOVE_LIKE} from "./types"


export const setLikes = (likes) => {
    return {
      type: SET_LIKES,
      payload: likes,
    };
  };
  
  export const addLike = (like) => {
    return {
      type: ADD_LIKE,
      payload: like,
    };
  };
  
  export const removeLike = (likeId) => {
    return {
      type: REMOVE_LIKE,
      payload: likeId,
    };
  };