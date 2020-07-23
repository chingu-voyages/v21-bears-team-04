import React, { useEffect } from "react";
import { connect } from "formik";
import { setMyActivities } from "../actions/journal";
import { setFeedActivities } from "../actions/feed";
import { connect as reduxConnect } from "react-redux";
import { getDashboard } from "../api/api";

export const Dashboard = ({ setJournal, setFeedActivities, journal, feed }) => {
  const renderFeed = () => {
    return (
      <ul>
        {feed.activities.map((feedItem) => (
          <li>{feedItem.title}</li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    (async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNTk1NDg2Mzk1LCJleHAiOjE1OTU1MDc5OTV9.K017NZcNh3AcAhnVPV6_cK0gLVnNJlR-WPaqfMKviYA";
      const dashboardData = await getDashboard(token);
      setJournal(dashboardData["myActivities"]);
      setFeedActivities(dashboardData["followingActivities"]);
    })();
  }, []);

  return (
    <div>
      Dashboard
      <div>{renderFeed()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    journal: state.journal,
    feed: state.feed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setJournal: (activities) => dispatch(setMyActivities(activities)),
    setFeedActivities: (activities) => dispatch(setFeedActivities(activities)),
  };
};

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Dashboard);
