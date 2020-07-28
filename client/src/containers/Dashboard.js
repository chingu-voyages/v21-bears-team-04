import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../actions/feed";
import {Link} from "react-router-dom"

export const _Dashboard = ({ auth: { token }, getDashboard }) => {
  useEffect(() => {
    console.log("token", token);
    getDashboard(token);
  }, [token]);

  return <div>
  
  
  <h1>Dashboard</h1>
  <Link to="/journal">journal</Link>

  
  
  
  </div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export const Dashboard = connect(mapStateToProps, { getDashboard })(_Dashboard);
