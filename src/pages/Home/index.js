import React, { useState, useEffect } from 'react';

// components
import SelectBox from '../../components/SelectBox';
import CardModel from '../../components/CarModel';

// others
import api from '../../api';

import './Home.scss';

const Home = () => {
  const { fetchCarMakes } = api;
  const [carMakes, setCarMakes] = useState([]);
  const [car, setCar] = useState('');

  useEffect(() => {
    fetchCarMakes()
      .then(allcarMakes => {
        setCarMakes(allcarMakes);
        console.log(allcarMakes);
      })
      .catch(error => {
        throw error;
      });
  }, [fetchCarMakes]);

  return (
    <div className='select-content'>
      <SelectBox
        options={carMakes}
        onChange={event => setCar(event.target.value)}
        value={car}
        name='Car Make'
      />
      {car && <CardModel car={car} />}
    </div>
  );
};

export default Home;
