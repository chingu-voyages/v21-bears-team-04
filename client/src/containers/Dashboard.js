import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDashboard } from '../actions/feed';

export const _Dashboard = ({ auth: { token } }) => {
  useEffect(() => {
    (async () => {
      const dashboardData = await getDashboard(token);
      // set the relevant stuff in redux store, based on dashboardData
      console.log(dashboardData);
    })();
  }, [token]);

  return <div>Dashboard</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export const Dashboard = connect(mapStateToProps, {})(_Dashboard);
