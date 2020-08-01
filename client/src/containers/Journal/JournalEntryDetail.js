import React, {useState} from "react";
import { connect } from "react-redux";
import JournalCommentBox from "./JournalCommentBox"

const JournalEntryDetail = ({ activity }) => {

    const [showComments, setShowComments] = useState(false)
    

    const handleDelete = () => {
        console.log("call redux removeActivity")
    }

    const toggleComments = () => {
         setShowComments(!showComments)
    }

    return (
    <div>
      <h3>Details for Activity {activity.id}</h3>

       <button onClick={handleDelete}>delete this activity</button>
       {activity.comments && activity.comments.length >= 0 && (<button onClick={toggleComments}>{showComments ? 'Hide Comments': 'Show Comments'}</button>)}
       {showComments && <JournalCommentBox comments={activity.comments} />}
    </div>
  );
};

export default connect(null, {})(JournalEntryDetail);
