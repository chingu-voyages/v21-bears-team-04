import {SET_MY_ACTIVITIES} from "./types"



/**
 * 
 * @param {Object[]} activities - an array of objects, each of which represents an activity 
 */
export function setMyActivities(activities) {
    return {
        type: SET_MY_ACTIVITIES,
        payload: activities
    }
}