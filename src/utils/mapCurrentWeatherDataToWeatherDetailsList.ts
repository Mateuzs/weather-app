//types
import { WeatherApiCurrentWeather, WeatherDetails } from "../types";
// constants, utils
import { convertTimestampToLocalDate, formatCelsiusValue } from "../utils";

// mapping introduces soft fallback in case contract with api is broken (missing values)
const mapCurrentWeatherDataToWeatherDetailsList = (
  weatherData: WeatherApiCurrentWeather
): WeatherDetails[] => {
  const {
    main: { temp_min = null, temp_max = null } = {},
    weather: [{ main = "", icon = "" }] = [{}],
    dt = null,
    timezone = null,
  } = weatherData;

  return [
    {
      minTemperature: formatCelsiusValue(temp_min),
      maxTemperature: formatCelsiusValue(temp_max),
      date: convertTimestampToLocalDate(dt, timezone),
      weatherIcon: icon,
      weatherShortDescription: main,
    },
  ];
};

export default mapCurrentWeatherDataToWeatherDetailsList;
