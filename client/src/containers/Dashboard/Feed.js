import React from "react";
import { Row, Col } from "react-bootstrap";
import FeedEntry from "./FeedEntry";
import {getFeedActivities} from "../../utils/transformations"
import { connect } from "react-redux";

const Feed = ({ activities, following, userId }) => {
  const renderFeedEntries = (entries) => {
    return entries.map((activity) => (
      <Row>
        <FeedEntry activity={activity} />
      </Row>
    ));
  };

  return (
    
    <Col>{activities && renderFeedEntries(getFeedActivities(userId, activities, following))}</Col>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    following: state.following,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(Feed);
