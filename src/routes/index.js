// third-party libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';

// pages
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  </Router>
);

export default Routes;
