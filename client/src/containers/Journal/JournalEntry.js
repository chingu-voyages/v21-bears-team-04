import React, { useState } from "react";
import JournalEntryDetail from "./JournalEntryDetail";
import { Button } from '../../components';


const JournalEntry = ({ activity }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  console.log("Activity.title", activity);
  return (
    <li>
      {activity.title}

      <Button variant="contained" color="secondary" onClick={toggleShowDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>

      {showDetails && <JournalEntryDetail activity={activity} />}
    </li>
  );
};

export default JournalEntry;
