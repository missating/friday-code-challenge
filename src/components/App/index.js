// third-party libraries
import React from 'react';

// components
import ErrorBoundary from 'components/ErrorBoundary';

// routes
import Routes from 'routes';

const App = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);

export default App;
