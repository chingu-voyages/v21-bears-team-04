import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { PublicLayout, PrivateLayout } from '../layout';

// import {Loader} from './components';

const CustomRoute = (props) => {
  const {
    component: Component,
    isAuthenticated,
    isVerifying,
    privateRoute,
    ...rest
  } = props;

  let redirectPath = '';

  // Layout for public or private route
  const Layout = privateRoute ? PrivateLayout : PublicLayout;

  // Loading screen when trying to login user in
  // if (isVerifying) return <Loader />;

  // Route non-user to sign in page
  if (!isAuthenticated && privateRoute) redirectPath = '/signin';

  // Route user from authentication routes to private route
  if (isAuthenticated && !privateRoute) redirectPath = '/dashboard';

  return (
    <Route
      {...rest}
      render={(props) =>
        redirectPath ? (
          <Redirect
            to={{ pathname: redirectPath, state: { from: props.location } }}
          />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.auth.loggedIn,
    isAuthenticated: true,
    // isVerifying: state.auth.isVerifying
  };
};

export default connect(mapStateToProps, {})(CustomRoute);
