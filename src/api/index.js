const API_URL_CAR_MAKES = 'http://localhost:8080/api/makes';
const API_URL_CAR_MODELS = 'http://localhost:8080/api/models';
const API_URL_CAR_VEHICLES = 'http://localhost:8080/api/vehicles';

const fetchCarMakes = async () => {
  const carMakes = await (await fetch(API_URL_CAR_MAKES)).json();
  return carMakes;
};

const fetchCarMakesModels = async make => {
  const carMakeModels = await (
    await fetch(`${API_URL_CAR_MODELS}?make=${make}`)
  ).json();
  return carMakeModels;
};

const fetchCarMakeModelVehicles = async (make, model) => {
  const CarMakeModelVehicles = await (
    await fetch(`${API_URL_CAR_VEHICLES}?make=${make}&model=${model}`)
  ).json();
  return CarMakeModelVehicles;
};

export default {
  fetchCarMakes,
  fetchCarMakesModels,
  fetchCarMakeModelVehicles,
};
