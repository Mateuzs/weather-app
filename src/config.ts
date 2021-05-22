import { Config } from "./types";

export const config: Config = {
  weatherApi: {
    forecastData: {
      origin: "https://api.openweathermap.org",
      currentWeatherPathname: "/data/2.5/weather?",
      forecastWeatherPathname: "api.openweathermap.org/data/2.5/forecast?",
    },
    mapPreview: {
      origin: "https://tile.openweathermap.org",
      mapPathname: "/map/",
    },
  },
};
