


const getActivitiesCreatedByUser = (allActivities, userId) => {
    return allActivities.filter(activity => userId === activity.user_id)
}

