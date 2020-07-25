import React, { useEffect } from "react";
import { connect } from "formik";
import { connect as reduxConnect } from "react-redux";
import { getDashboard } from "../api/api";

export const Dashboard = ({auth: {token}}) => {
  useEffect(() => {
    (async () => {  
        
      const dashboardData = await getDashboard(token);
      // set the relevant stuff in redux store, based on dashboardData
      console.log(dashboardData);
    })();
  }, []);

  return <div>Dashboard</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Dashboard);
