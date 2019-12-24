// third-party libraries
import React from 'react';

import ErrorBoundary from '../ErrorBoundary';

// routes
import Routes from '../../routes';

const App = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);

export default App;
