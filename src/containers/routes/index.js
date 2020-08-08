import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './CustomRoute';

import { Homepage, SignIn, SignUp, Dashboard } from '..';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} privateRoute />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;