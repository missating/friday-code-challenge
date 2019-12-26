// third-party libraries
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

// pages
import Vehicle from './index';

afterEach(cleanup);

describe('Vehicle Page', () => {
  it('renders message card if no model is available', () => {
    const history = createMemoryHistory();

    const location = { pathname: '/fiesta/ford' };

    const { getByText } = render(
      <Router history={history}>
        <Vehicle location={location} />
      </Router>
    );

    expect(
      getByText('ford, fiesta has no Vehicles available')
    ).toBeInTheDocument();
  });
});
