import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { Typography, Button } from '../../components';

export const Nav = () => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.container}>
        <Link to="/">
          <Typography className={classes.logo} variant="h5">
            FitX
          </Typography>
        </Link>

        <nav className="App-account">
          <Link to="/signin">
            <Button color="secondary">Login</Button>
          </Link>

          <Link to="/signup">
            <Button variant="contained" color="secondary">
              Register
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = (theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 4),
    },
  },
  logo: {
    cursor: 'pointer',
  },
});

const useStyles = createUseStyles(styles, { name: 'nav' });
