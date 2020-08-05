import React, { useState } from "react";
import JournalEntryDetail from "./JournalEntryDetail";
import { Button, Typography } from "../../components";
import moment from "moment";
import { constructDurationStr } from "../../utils/transformations";

const JournalEntry = ({ activityInfo }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  console.log("activityInfo", activityInfo);
  const { activity, momentActivity } = activityInfo;
  //console.log("activity", activity);
  const startingMoment = moment.utc(activity.start);

  // console.log("", activity);
  return (
    <li>
      <Typography variant="h6">{momentActivity.format("h:mm a")}</Typography>
      <Typography variant="h3">{activity.title}</Typography>
      <Typography variant="h6">
        {constructDurationStr(startingMoment, momentActivity)}
      </Typography>

      <Button variant="contained" color="secondary" onClick={toggleShowDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>

      {showDetails && <JournalEntryDetail activity={activity} />}
    </li>
  );
};

export default JournalEntry;
