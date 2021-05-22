import { WeatherApiCurrentWeather, CityCoordinates } from "../types";

const getCityCoordinates = (
  weatherData: WeatherApiCurrentWeather
): CityCoordinates => {
  const {
    coord: { lat, lon },
  } = weatherData;

  return {
    longitude: lon,
    latitude: lat,
  };
};

export default getCityCoordinates;
