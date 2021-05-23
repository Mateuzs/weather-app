// types
import {
  WeatherApiCurrentWeather,
  CityLocation,
  WeatherApiForecastWeather,
} from "../types";

const getCityLocation = (
  weatherData: WeatherApiCurrentWeather | WeatherApiForecastWeather
): CityLocation => {
  const cityName =
    (weatherData as WeatherApiCurrentWeather)?.name ||
    (weatherData as WeatherApiForecastWeather)?.city.name;

  const latitude =
    (weatherData as WeatherApiCurrentWeather)?.coord?.lat ||
    (weatherData as WeatherApiForecastWeather)?.city?.coord?.lat;

  const longitude =
    (weatherData as WeatherApiCurrentWeather)?.coord?.lon ||
    (weatherData as WeatherApiForecastWeather)?.city?.coord?.lon;

  return {
    longitude,
    latitude,
    cityName,
  };
};

export default getCityLocation;
