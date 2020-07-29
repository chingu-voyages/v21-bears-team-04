import moment from "moment";

export const getActivitiesCreatedByUser = (activities, userId) => {
  return activities.filter((activity) => userId === activity.user_id);
};

const getLikesForActivity = (activityId, likes) => {
  return likes.filter((like) => activityId === likes.resource_id);
};

const getCommentsForActivity = (activityId, comments) => {
  return comments.filter((comment) => activityId === comment.resource_id);
};

const getCategoryForActivity = (activityCategoryId, activityCategories) => {
  return activityCategories.find(
    (category) => activityCategoryId === category.id
  );
};

const getUserInfoForActivity = (activityCategoryId, users) => {
  return users.find((user) => user.id === activityCategoryId);
};

// use this function to create activity with the data needed for whatever view / component needs to be rendered
export const constructActivity = (activity, associatedData) => {
  const { categories, likes, comments, users } = associatedData;
  const constructedActivity = {
    ...activity,
  };

  if (categories) {
    const activityCategory = getCategoryForActivity(
      activity.category,
      categories
    );
    constructedActivity.category = activityCategory;
  }

  if (likes) {
    const activityLikes = getLikesForActivity(activity.id, likes);
    constructedActivity.likes = activityLikes;
  }

  if (comments) {
    const activityComments = getCommentsForActivity(activity.id, comments);
    constructedActivity.comments = activityComments;
  }

  if (users) {
    // use this when you need username for activity created by the user other than logged in user
    const activityCreatedByUser = getUserInfoForActivity(activity.id, users);
    constructedActivity.user = activityCreatedByUser;
  }

  return constructedActivity;
};

export const constructActivities = (activities, associatedData) => {
  return activities.map((activity) =>
    constructActivity(activity, associatedData)
  );
};

export const getActivitiesByDay = (activities) => {
  // the assumption here is that timestamps come from backend ordered by timestamp Descending (most recent first)

  const activityStartsAsMoments = activities.map((activity) =>
    moment.utc(activity.start)
  );

  const journalActivitiesByYear = {};
  let momentActivity;
  let year;
  let dayOfYear;
  let dateAndActivityRecord;
  for (let i = 0; i < activityStartsAsMoments.length; i++) {
    momentActivity = activityStartsAsMoments[i];
    year = momentActivity.year();
    dayOfYear = momentActivity.dayOfYear();
    dateAndActivityRecord = {
      activity: activities[i],
      momentActivity: activityStartsAsMoments[i],
    };
    if (!(year in journalActivitiesByYear))
      journalActivitiesByYear[year] = {
        [dayOfYear]: [dateAndActivityRecord],
      };
    else if (!(dayOfYear in journalActivitiesByYear[year])) {
      journalActivitiesByYear[year][dayOfYear] = [dateAndActivityRecord];
    } else {
      // dayOfYear exists, so just need to push data for current activity into it
      journalActivitiesByYear[year][dayOfYear].push(dateAndActivityRecord);
    }
  }

  console.log(journalActivitiesByYear);
  return journalActivitiesByYear;
};
