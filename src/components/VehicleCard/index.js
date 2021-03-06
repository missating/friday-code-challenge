// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './VehicleCard.scss';

// images
import car from 'assets/vehicle.png';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className='vehicle-card-item'>
      <img src={car} alt='car-placeholder' width='80' />
      <p>Engine Power PS: {vehicle.enginePowerPS}</p>
      <p>Engine Power KW: {vehicle.enginePowerKW}</p>
      <p>Fuel Type: {vehicle.fuelType}</p>
      <p>Body Type: {vehicle.bodyType}</p>
      <p>Engine Capacity: {vehicle.engineCapacity}</p>
    </div>
  );
};

export default VehicleCard;

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    enginePowerPS: PropTypes.number.isRequired,
    enginePowerKW: PropTypes.number.isRequired,
    fuelType: PropTypes.string.isRequired,
    bodyType: PropTypes.string.isRequired,
    engineCapacity: PropTypes.number.isRequired,
  }).isRequired,
};
