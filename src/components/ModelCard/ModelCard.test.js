// third-party libraries
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';

// components
import ModelCard from './index';

afterEach(cleanup);

describe('ModelCard Component', () => {
  it('renders message card if no model is available', () => {
    const history = createMemoryHistory();
    history.push('/toyota/corolla');

    const { getByText } = render(
      <Router history={history}>
        <ModelCard make='Toyota' model='corolla' />
      </Router>
    );

    const node = getByText('View');
    fireEvent.click(node);

    expect(getByText('corolla')).toBeInTheDocument();
    expect(getByText('View')).toBeInTheDocument();
  });
});
