import {SET_ACTIVITY_CATEGORIES} from "./types"


export const setActivityCategories = (activityCategories) => {
   return {
       type: SET_ACTIVITY_CATEGORIES,
       payload: activityCategories
   }
}