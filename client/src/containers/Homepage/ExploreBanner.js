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
          FitX is a social fitness app that is designed to motivate you to stay fit and expand your fitness community. At FitX, we believe that you can level up your fitness by tracking your workouts and sharing your fitness progress with others!
        </Typography>

        <Button variant="contained" color="secondary">
         <a href='#SocialBanner'>Explore</a> 
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
