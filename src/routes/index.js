// third-party libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import ErrorBoundary from 'components/ErrorBoundary';

// pages
import Home from 'pages/Home';
import Vehicle from 'pages/Vehicle';

const Routes = () => (
  <Router>
    <Switch>
      <ErrorBoundary>
        <Route exact path='/:make/:model' component={Vehicle} />
        <Route exact path='/' component={Home} />
      </ErrorBoundary>
    </Switch>
  </Router>
);

export default Routes;
