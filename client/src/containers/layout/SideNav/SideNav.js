import React from 'react';
import { createUseStyles } from 'react-jss';
import { Typography } from '../../../components';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { ReactComponent as IcExplore } from './icons/explore.svg';
import { ReactComponent as IcHome } from './icons/home.svg';
import { ReactComponent as IcJournal } from './icons/journal.svg';
import { ReactComponent as IcSettings } from './icons/settings.svg';
import { ReactComponent as IcNotification } from './icons/notification.svg';
import { ReactComponent as IcMenu } from './icons/menu.svg';

const links = [
  {
    name: 'home',
    icon: IcHome,
    route: '/dashboard',
  },
  {
    name: 'explore',
    icon: IcExplore,
    route: '/explore',
  },
  {
    name: 'journal',
    icon: IcJournal,
    route: '/journal',
  },
  {
    name: 'notification',
    icon: IcNotification,
    route: '/notification',
  },
  {
    name: 'settings',
    icon: IcSettings,
    route: '/settings',
  },
];

export const SideNav = () => {
  const classes = useStyles();
  const { location } = useHistory();

  return (
    <header className={classes.root}>
      <div className={classes.mobileNav}>
        <div className={classes.iconButton}>
          <IcMenu />
        </div>
      </div>

      <div className={classes.container}>
        <Typography variant="h5">FitX</Typography>

        <div>
          {links.map(({ route, icon: Icon }, index) => (
            <Link key={index} to={route}>
              <div
                className={clsx(classes.iconButton, {
                  [classes.active]: location.pathname === route,
                })}
              >
                <Icon />
              </div>
            </Link>
          ))}
        </div>

        <div className={classes.avatar}></div>
      </div>
    </header>
  );
};

const styles = (theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,

    backgroundColor: theme.palette.background.paper,
    width: '100%',
    maxHeight: '80px',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '120px',
      height: '100%',
      maxHeight: 'none',
    },
  },
  mobileNav: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  container: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      height: '100%',
      padding: theme.spacing(3, 4),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  iconButton: {
    padding: theme.spacing(0),
    margin: theme.spacing(2),

    '& svg': {
      maxWidth: '24px',
      maxHeight: '24px',
    },

    '&$active': {
      fill: theme.palette.secondary.main,
    },

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5, 0),
    },
  },
  active: {},
  avatar: {
    borderRadius: '50%',
    backgroundColor: 'black',
    width: '40px',
    height: '40px',
  },
});

const useStyles = createUseStyles(styles, { name: 'side-nav' });
