// third-party libraries
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

// pages
import Home from './index';

afterEach(cleanup);

describe('Home Page', () => {
  it('renders message card if no model is available', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(
      getByText('Hello, Select A Registered Car To Get Started')
    ).toBeInTheDocument();
  });
});
