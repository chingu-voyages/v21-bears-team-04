import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../actions/feed";

export const _Dashboard = ({ auth: { token }, getDashboard }) => {
  useEffect(() => {
    console.log("token", token);
    getDashboard(token);
  }, [token]);

  return <div>Dashboard</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export const Dashboard = connect(mapStateToProps, { getDashboard })(_Dashboard);
