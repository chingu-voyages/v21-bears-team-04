import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Typography, Button } from '../../../components';
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
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={classes.root}>
      <div className={classes.mobileNav}>
        <div
          className={classes.iconButton}
          role="button"
          onClick={() => setOpen(true)}
        >
          <IcMenu />
        </div>

        {isOpen && (
          <nav className={classes.overlayLinks}>
            <ul>
              {links.map((link, index) => (
                <Link
                  to={link.route}
                  key={index}
                  onClick={() => setOpen(false)}
                >
                  <li>
                    <Typography variant="h4" color="inherit" align="center">
                      {link.name}
                    </Typography>
                  </li>
                </Link>
              ))}
            </ul>

            <Button
              color="secondary"
              size="large"
              onClick={() => setOpen(false)}
            >
              <Typography variant="h2" color="inherit">
                &times;
              </Typography>
            </Button>
          </nav>
        )}
      </div>

      <div className={classes.container}>
        <Link to="/dashboard">
          <Typography variant="h5">FitX</Typography>
        </Link>

        <nav className={classes.links}>
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
        </nav>

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
  overlayLinks: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,

    '& li': {
      padding: theme.spacing(3),
      textTransform: 'capitalize',
      color: theme.palette.secondary.main,
      transition: 'all 300ms ease-in',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        transition: 'all color 300ms ease-in',
      },
    },

    '& button': {
      position: 'fixed',
      top: 0,
      left: 24,
    },
  },
  container: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      height: '100%',
      padding: theme.spacing(2, 0),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  links: {
    width: '100%',
    textAlign: 'center',
  },
  iconButton: {
    padding: theme.spacing(0.5, 0),
    margin: theme.spacing(2),

    '& svg': {
      maxWidth: '24px',
      maxHeight: '24px',
    },

    '&$active': {
      fill: theme.palette.secondary.main,
      borderRight: `2px solid ${theme.palette.secondary.main}`,
    },

    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5, 0),
    },
  },
  active: {},
  avatar: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    background: 'url(/images/avatar-default.jpg) no-repeat center',
    backgroundSize: 'cover',
    cursor: 'pointer',
  },
});

const useStyles = createUseStyles(styles, { name: 'side-nav' });
