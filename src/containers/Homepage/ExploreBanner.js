import React from 'react';
import { createUseStyles } from 'react-jss';
import { Typography, Button } from '../../components';

export const ExploreBanner = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.thumbnail}>
        <img src="/images/landing.jpg" alt="fitx user, working out" />
      </div>

      <div className={classes.greeting}>
        <Typography variant="h3">Fitness starts with not just you</Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>

        <Button variant="contained" color="secondary">
          Explore
        </Button>
      </div>
    </section>
  );
};

export const styles = (theme) => ({
  root: {
    margin: theme.spacing(6, 0),

    '& > div': {
      margin: theme.spacing(4, 0),
    },

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  greeting: {
    '& > *': {
      margin: theme.spacing(1),
    },

    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
    },
  },
  thumbnail: {
    '& img': {
      borderRadius: theme.shapes.radius,
    },

    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
    },
  },
});

const useStyles = createUseStyles(styles, { name: 'explore' });
