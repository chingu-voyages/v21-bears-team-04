import React from "react";
import JournalEntry from './JournalEntry'

const JournalDay = ({ activityInfo }) => {
  console.log("journalDayActivities", activityInfo);
  const activities = activityInfo.map(info => info.activity)
  const anActivityMoment = activityInfo[0].momentActivity;
  const dayHeading = anActivityMoment.format("MMMM Do");
  
  

  return (
    <li>
      <h2>{dayHeading}</h2>
      <ul>
         {activities.map(activity => <JournalEntry key={Math.random()} activity={activity} />)} 
      </ul>
    </li>
  );
};

export default JournalDay;
