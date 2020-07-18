import { SET_FEED_INFO } from "./types";

export function setFeedInfo(feedInfo) {
  return {
    type: SET_FEED_INFO,
    payload: feedInfo
  };
}
