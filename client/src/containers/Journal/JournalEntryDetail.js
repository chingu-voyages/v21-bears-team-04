import React, {useState} from "react";
import { connect } from "react-redux";
import JournalCommentBox from "./JournalCommentBox"
import { Typography, Button } from '../../components';

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
      <Typography variant='h3'>Details for Activity {activity.id}</Typography>

       <Button variant="contained" color="secondary" onClick={handleDelete}>delete this activity</Button>
       {activity.comments && activity.comments.length >= 0 && (<button onClick={toggleComments}>{showComments ? 'Hide Comments': 'Show Comments'}</button>)}
       {showComments && <JournalCommentBox comments={activity.comments} />}
    </div>
  );
};

export default connect(null, {})(JournalEntryDetail);
