/* eslint-disable jsx-a11y/no-onchange */
// react library
import React, { useEffect, useState } from 'react';

// styles
import './Select.scss';

// others
import api from '../../api';

const Select = () => {
  const { fetchCarMakes } = api;
  const [carMakes, setCarMakes] = useState([]);
  const [car, setCar] = useState('');

  useEffect(() => {
    fetchCarMakes()
      .then(allcarMakes => {
        setCarMakes(allcarMakes);
      })
      .catch(error => {
        throw error;
      });
  }, [fetchCarMakes]);

  const cars = carMakes.map((carMake, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={index}>{carMake}</option>
  ));

  return (
    <div className='select-container'>
      {carMakes && carMakes.length > 1 && (
        <select
          className='select-container__content'
          value={car}
          onChange={event => setCar(event.target.value)}
        >
          <option>Select Car</option>
          {cars}
        </select>
      )}

      {carMakes.length === 0 && (
        <div className='select-container__content-error'>
          <p>Cars are unavailbale at the moment</p>
          <button type='button' onClick={() => window.location.reload()}>
            Please Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Select;
