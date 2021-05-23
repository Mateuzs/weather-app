//types
import {
  WeatherApiForecastWeather,
  WeatherApiForecastWeatherSample,
  WeatherDetails,
} from "../types";
// constants, utils
import { MIDDAY_TIME } from "../constants";
import { formatCelsiusValue } from "../utils";

const mapForecastWeatherDataToWeatherDetailsList = (
  weatherData: WeatherApiForecastWeather
): WeatherDetails[] => {
  const { list: weatherApiForecastList = [] } = weatherData;

  return weatherApiForecastList
    .filter(chooseMiddayForecast)
    .map(mapForecastWeatherDataToWeatherDetails);
};

const chooseMiddayForecast = (
  weatherApiObject: WeatherApiForecastWeatherSample
) => weatherApiObject.dt_txt?.split(" ")[1] === MIDDAY_TIME;

// mapping introduces soft fallback in case contract with api is broken
// in unexpected way (missing values)
const mapForecastWeatherDataToWeatherDetails = (
  weatherApiObject: WeatherApiForecastWeatherSample
) => {
  const {
    main: { temp_min = null, temp_max = null } = {},
    weather: [{ main = "", icon = "" }] = [{}],
    dt_txt = "",
  } = weatherApiObject;
  return {
    minTemperature: formatCelsiusValue(temp_min),
    maxTemperature: formatCelsiusValue(temp_max),
    date: new Date(dt_txt).toDateString(),
    weatherIcon: icon,
    weatherShortDescription: main,
  };
};

export default mapForecastWeatherDataToWeatherDetailsList;
