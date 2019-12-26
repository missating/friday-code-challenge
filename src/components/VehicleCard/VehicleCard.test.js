// third-party libraries
import React from 'react';
import { render, cleanup } from '@testing-library/react';

// components
import VehicleCard from './index';

afterEach(cleanup);

describe('VehicleCard Component', () => {
  const vehicle = {
    make: 'FORD',
    model: 'Fiesta',
    enginePowerPS: 60,
    enginePowerKW: 44,
    fuelType: 'Benzin',
    bodyType: 'Limousine',
    engineCapacity: 1299,
  };

  it('renders without crashing', () => {
    const { getByText } = render(<VehicleCard vehicle={vehicle} />);
    expect(getByText('Engine Power KW: 44')).toBeInTheDocument();
  });
});
