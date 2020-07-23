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
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
  },
});

const useStyles = createUseStyles(styles, { name: 'nav' });
