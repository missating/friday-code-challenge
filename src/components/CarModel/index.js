// third-party libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import Card from '../Card';

// others
import api from '../../api';

const CarModel = ({ car }) => {
  const { fetchCarMakesModels } = api;
  const [carMakeModels, setCarMakeModels] = useState([]);

  useEffect(() => {
    fetchCarMakesModels(car)
      .then(allcarMakeModels => {
        setCarMakeModels(allcarMakeModels);
      })
      .catch(error => {
        throw error;
      });
  }, [car, fetchCarMakesModels]);

  return (
    <div className='car-model-container'>
      {carMakeModels.map((carMakeModel, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card carMakeModel={carMakeModel} key={index} />
      ))}
    </div>
  );
};

export default CarModel;

CarModel.propTypes = {
  car: PropTypes.string.isRequired,
};
