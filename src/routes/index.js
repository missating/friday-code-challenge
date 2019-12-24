// third-party libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import ErrorBoundary from '../components/ErrorBoundary';

// pages
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <Switch>
      <ErrorBoundary>
        <Route exact path='/' component={Home} />
      </ErrorBoundary>
    </Switch>
  </Router>
);

export default Routes;
