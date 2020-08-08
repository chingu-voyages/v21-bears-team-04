import React from 'react';
import { createUseStyles } from 'react-jss';
import { Typography } from '../../components';

const photos = [
  {
    icon: '/images/diary.png',
    title: 'Track Your Progress',
    description:
      'Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },
  {
    icon: '/images/passion.png',
    title: 'Connect With Others',
    description:
      'Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },
  {
    icon: '/images/shoe.png',
    title: 'Stay Motivated',
    description:
      'Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },
];

export const GoalsBanner = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h3" align="center">
        Tools for your Goals
      </Typography>

      <div className={classes.features}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.icon} alt="goal logos" />
            <Typography variant="h5">{photo.title}</Typography>
            <Typography>{photo.description}</Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = (theme) => ({
  root: {
    margin: theme.spacing(10, 0),
  },
  features: {
    margin: theme.spacing(4, 0),
    textAlign: 'center',

    '& div': {
      margin: theme.spacing(5, 0),
    },

    '& img': {
      maxWidth: '50px',
    },

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'space-between',

      '& div': {
        maxWidth: '30%',
      },
    },
  },
});

const useStyles = createUseStyles(styles, { name: 'goal' });
