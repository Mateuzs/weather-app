//external
import { WeatherApiCurrentWeather, WeatherDetails } from "../types";
// constants, utils
import { convertTimestampToLocalDate, formatCelsiusValue } from "../utils";

const mapWeatherDataToWeatherDetails = (
  weatherData: WeatherApiCurrentWeather
): WeatherDetails[] => {
  const {
    coord: { lat = "", lon = "" },
    main: { temp_min = null, temp_max = null },
    weather: [{ main = "", icon = "" }],
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

export default mapWeatherDataToWeatherDetails;
