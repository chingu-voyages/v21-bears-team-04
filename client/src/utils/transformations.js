const getActivitiesCreatedByUser = (activities, userId) => {
  return activities.filter((activity) => userId === activity.user_id);
};

const getLikesForActivity = (activityId, likes) => {
  return likes.filter((like) => activity.Id === likes.resource_id);
};

const getCommentsForActivity = (activityId, comments) => {
  return comments.filter((comment) => activityId === comment.resource_id);
};

const getCategoryForActivity = (activityCategoryId, activityCategories) => {
  return activityCategories.find(
    (category) => activityCategoryId === category.id
  );
};
