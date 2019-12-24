// third-party libraries
import React, { useState, useEffect } from 'react';

// components
import SelectBox from '../../components/SelectBox';
import CardModel from '../../components/CarModel';
import MessageCard from '../../components/MessageCard';
import ErrorBoundary from '../../components/ErrorBoundary';

// styles
import './Home.scss';

// others
import api from '../../api';

const Home = () => {
  const { fetchCarMakes } = api;
  const [carMakes, setCarMakes] = useState([]);
  const [car, setCar] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCarMakes()
      .then(allcarMakes => {
        setCarMakes(allcarMakes);
      })
      .catch(error => {
        setErrorMessage(() => {
          throw error;
        });
      });
  }, [fetchCarMakes]);

  return (
    <>
      <SelectBox
        options={carMakes}
        onChange={event => setCar(event.target.value)}
        value={car}
        name='Car Make'
      />
      {!car && !errorMessage && (
        <MessageCard message='Hello, Select A Registered Car To Get Started' />
      )}
      <ErrorBoundary>{car && <CardModel car={car} />}</ErrorBoundary>
    </>
  );
};

export default Home;
