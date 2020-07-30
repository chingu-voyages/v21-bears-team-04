import React, { useState } from "react";
import JournalEntryDetail from "./JournalEntryDetail";

const JournalEntry = ({ activity }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  console.log("Activity.title", activity);
  return (
    <li>
      {activity.title}

      <button onClick={toggleShowDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && <JournalEntryDetail activity={activity} />}
    </li>
  );
};

export default JournalEntry;
