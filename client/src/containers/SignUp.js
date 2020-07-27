import React from 'react';
import { createUseStyles } from 'react-jss';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { Card, Typography, Button, TextField } from '../components';
import { signUp } from '../actions/auth';

export const _SignUp = ({ signUp }) => {
  const classes = useStyles();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signUp(values);
    },
  });

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h6" align="center">
            Get Started Today
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="firstname"
              required
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstname}
            />

            <TextField
              type="text"
              name="lastname"
              required
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastname}
            />

            <TextField
              type="text"
              name="username"
              required
              placeholder="Username"
              onChange={handleChange}
              value={values.username}
            />

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
              Register
            </Button>
          </form>

          <Typography variant="caption" align="center" display="block">
            I agree to{' '}
            <Button className={classes.term} color="secondary">
              term and privacy policy
            </Button>
          </Typography>
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
  term: {
    ...theme.typography.caption,
    padding: 0,
  },
});

const useStyles = createUseStyles(styles, { name: 'sign-up' });

export const SignUp = connect(null, { signUp })(_SignUp);
