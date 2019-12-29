// third-party libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import VehicleCard from '../../components/VehicleCard';
import MessageCard from '../../components/MessageCard';

// styles
import './Vehicle.scss';

// others
import api from '../../api';

const Vehicle = ({ location }) => {
  const make = location.pathname.split('/')[1];
  const model = location.pathname.split('/')[2];

  const { fetchCarMakeModelVehicles } = api;
  const [vehicles, setVehicles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCarMakeModelVehicles(make, model)
      .then(allVehicles => {
        setVehicles(allVehicles);
      })
      .catch(error => {
        setErrorMessage(() => {
          throw error;
        });
      });
  }, [fetchCarMakeModelVehicles, make, model]);

  return (
    <>
      <p className='vehicle-container-text'>
        {`Showing all registered Vehicles for ${make}, ${model} `}
      </p>
      <span className='line' />
      <div className='vehicle-card-container'>
        {vehicles.map((vehicle, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <VehicleCard vehicle={vehicle} key={index} />
        ))}
      </div>

      {/* not found */}
      {vehicles.length === 0 && !errorMessage && (
        <MessageCard
          message={`${make}, ${model} has no Vehicles available`}
          goBack
        />
      )}
    </>
  );
};

export default Vehicle;

Vehicle.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
