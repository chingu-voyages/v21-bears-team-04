


const getActivitiesCreatedByUser = (activities, userId) => {
    return activities.filter(activity => userId === activity.user_id)
}

const getLikesForActivity = (activityId, likes) => {
    return likes.filter(like => activity.Id === likes.resource_id) 
}

const getCommentsForActivity = (commentId, comments) => {
    return comments.filter(comment => comment.Id === comment.resource_id) 
}

