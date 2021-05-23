import { Config } from "./types";

export const config: Config = {
  weatherApi: {
    origin: "https://api.openweathermap.org",
    currentWeatherPathname: "/data/2.5/weather",
    forecastWeatherPathname: "/data/2.5/forecast",
  },
  weatherImage: {
    origin: "https://openweathermap.org",
    pathname: "/img/wn/{{imageId}}@2x.png",
  },
};
