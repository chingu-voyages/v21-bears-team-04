import React from 'react';
import { createUseStyles } from 'react-jss';
import { Footer } from './Footer';
import { Nav } from './Nav';

export const PublicLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 6),
    },
  },
});

const useStyles = createUseStyles(styles, { name: 'public-layout' });
