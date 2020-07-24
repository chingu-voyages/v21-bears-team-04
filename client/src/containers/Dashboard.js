import React, { useEffect } from "react";
import { connect } from "formik";
import { connect as reduxConnect } from "react-redux";
import { getDashboard } from "../api/api";

export const Dashboard = ({}) => {
  useEffect(() => {
    (async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwiaWF0IjoxNTk1NDg2Mzk1LCJleHAiOjE1OTU1MDc5OTV9.K017NZcNh3AcAhnVPV6_cK0gLVnNJlR-WPaqfMKviYA";
      const dashboardData = await getDashboard(token);
      // set the relevant stuff in redux store, based on dashboardData
    })();
  }, []);

  return <div>Dashboard</div>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Dashboard);
