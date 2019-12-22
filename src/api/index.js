const API_URL_CAR_MAKES = 'http://localhost:8080/api/makes';

const fetchCarMakes = async () => {
  const carMakes = await (await fetch(API_URL_CAR_MAKES)).json();
  return carMakes;
};

export default {
  fetchCarMakes,
};
