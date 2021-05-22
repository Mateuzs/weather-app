// components
export interface NavBarButtonProps {
  navigationLink: string;
  buttonText: string;
}

// Config
export interface Config {
  weatherApi: {
    forecastData: {
      origin: string;
      currentWeatherPathname: string;
      forecastWeatherPathname: string;
    };
    mapPreview: {
      origin: string;
      mapPathname: string;
    };
  };
}
