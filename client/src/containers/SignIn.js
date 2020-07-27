import React from 'react';
import { createUseStyles } from 'react-jss';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Typography, Button, TextField } from '../components';
import { signIn } from '../actions/auth';

export const _SignIn = ({ signIn }) => {
  const classes = useStyles();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signIn(values);
    },
  });

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h6" align="center">
            Welcome to FitX
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />

            <TextField
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </form>

          <div className={classes.options}>
            <Button color="secondary">Forgot password?</Button>
            <span>|</span>
            <Link to="/signup">
              <Button color="secondary">Create an account</Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.default,
  },
  container: {
    padding: theme.spacing(2),
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing(5, 3, 1),
    display: 'inline-block',
    width: '100%',
    maxWidth: '400px',

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 5, 2),
    },
  },
  form: {
    margin: theme.spacing(4, 0, 2),
  },
  options: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
  },
});

const useStyles = createUseStyles(styles, { name: 'sign-in' });

export const SignIn = connect(null, { signIn })(_SignIn);
