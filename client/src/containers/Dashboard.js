import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../actions/feed";
import {Link} from "react-router-dom"
import { Typography, Button } from '../components';
import { createUseStyles } from 'react-jss';


export const _Dashboard = ({ auth: { token }, getDashboard }) => {
  const classes = useStyles();
  useEffect(() => {
    console.log("token", token);
    getDashboard(token);
  }, [token]);

  return <div  className={classes.root}>
  
  
  <Typography variant='h1'  className={classes.header}>Dashboard</Typography>
  <Button variant="contained" color="secondary"><Link to="/journal">My FitX Journal</Link></Button>

  
  
  
  </div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    
  };
};

export const Dashboard = connect(mapStateToProps, { getDashboard })(_Dashboard);

export const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& > div': {
      margin: theme.spacing(4, 0),
    }},
  header: {
    marginBottom: '15px',
  }
});

const useStyles = createUseStyles(styles, { name: 'dashboard' });