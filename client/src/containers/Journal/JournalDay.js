import React from "react";
import JournalEntry from "./JournalEntry";
import { Typography } from "../../components";
 

const JournalDay = ({ activityInfo }) => {
  console.log("journalDayActivities", activityInfo);

  const anActivityMoment = activityInfo[0].momentActivity;
  const dayHeading = anActivityMoment.format("MMMM Do");

  return (
    <li>
      <Typography variant="h2">{dayHeading}</Typography>
      <ul>
        {activityInfo.map((info) => (
          <JournalEntry key={Math.random()} activityInfo={info} />
        ))}
      </ul>
    </li>
  );
};

export default JournalDay;
