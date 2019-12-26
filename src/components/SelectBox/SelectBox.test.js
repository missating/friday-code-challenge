// third-party libraries
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

// components
import SelectBox from './index';

afterEach(cleanup);

describe('SelectBox Component', () => {
  it('captures changes', () => {
    const options = ['Toyota'];

    const handleChange = jest.fn();

    const { getByText, getByTestId } = render(
      <SelectBox
        onChange={handleChange}
        options={options}
        name='Car Make'
        value='Toyota'
      />
    );
    expect(getByText('Toyota')).toBeInTheDocument();
    fireEvent.change(getByTestId('select'), { target: { value: 'Lexus' } });
  });
});
