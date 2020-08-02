import React from 'react';

import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import Route from './CustomRoute';

import { Homepage, SignIn, SignUp, Dashboard, Journal, AddActivity, Blog, Pricing, About, Contacts, Privacy } from '..';

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
        <Route path="/journal" exact component={Journal} privateRoute />
        <Route path="/add_activity" exact component={AddActivity} privateRoute />
        <Route path="/explore" exact component={DummyComponent} privateRoute />
        <Route path="/blog" exact component={Blog}/>
        <Route path="/pricing" exact component={Pricing}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contacts" exact component={Contacts}/>
        <Route path="/privacy" exact component={Privacy}/>
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
