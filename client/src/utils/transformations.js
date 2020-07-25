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

export const constructActivity = (activity, categories, likes, comments) => {
    const category = getCategoryForActivity(activity.id, categories) 
    const likes = getLikesForActivity(activity.id, likes)
    const comments = getCommentsForActivity(activity.id, comments)
    const constructedActivity = {
        ...activity,
        likes: likes,
        comments: comments,
        category: category
    }

    return constructedActivity

} 
