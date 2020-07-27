import React from 'react';
import { createUseStyles } from 'react-jss';
import { SideNav } from './SideNav';

export const PrivateLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideNav />
      <main className={classes.main}>
        <div>{children}</div>
      </main>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
  main: {
    paddingTop: theme.spacing(10),

    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingLeft: '120px',
    },
  },
});

const useStyles = createUseStyles(styles, { name: 'private-layout' });
