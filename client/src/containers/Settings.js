import React, { useEffect } from "react";
import { Typography } from '../components';
import { createUseStyles } from 'react-jss';


export const Settings =()=>{
    const classes = useStyles();

  return <div  className={classes.root}>
  
  
  <Typography variant='h1'  className={classes.header}>Settings</Typography>

  
  
  
  </div>;
};

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