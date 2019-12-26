// third-party libraries
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

// components
import Model from './index';

afterEach(cleanup);

describe('Model Component', () => {
  it('renders without crashing', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Model make='Toyota' />
      </Router>
    );
    expect(getByText('Toyota has no Models available')).toBeInTheDocument();
  });
});
