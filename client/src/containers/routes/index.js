import React from 'react';

import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import Route from './CustomRoute';

import { Homepage, SignIn, SignUp, Dashboard } from '..';

const DummyComponent = () => {
  const { location } = useHistory();

  return <div>{location.pathname}</div>;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} privateRoute />
        <Route path="/explore" exact component={DummyComponent} privateRoute />
        <Route path="/journal" exact component={DummyComponent} privateRoute />
        <Route
          path="/notification"
          exact
          component={DummyComponent}
          privateRoute
        />
        <Route path="/settings" exact component={DummyComponent} privateRoute />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
