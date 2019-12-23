const API_URL_CAR_MAKES = 'http://localhost:8080/api/makes';
const API_URL_CAR_MODELS = 'http://localhost:8080/api/models';

const fetchCarMakes = async () => {
  const carMakes = await (await fetch(API_URL_CAR_MAKES)).json();
  return carMakes;
};

const fetchCarMakesModels = async car => {
  const carMakeModels = await (
    await fetch(`${API_URL_CAR_MODELS}?make=${car}`)
  ).json();
  return carMakeModels;
};

export default {
  fetchCarMakes,
  fetchCarMakesModels,
};
