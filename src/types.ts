// components
export interface NavBarButtonProps {
  navigationLink: string;
  buttonText: string;
}

export interface WeatherMapContainerProps {
  longitude: number;
  latitude: number;
  deviceType: DeviceType;
  zoom?: number;
}

export interface WeatherMapChangeViewProps {
  longitude: number;
  latitude: number;
  zoom?: number;
}

export interface WeatherDetailsElementProps {
  weatherDetailsElement: WeatherDetails;
}

export interface WeatherDetailsListProps {
  weatherDetailsList: WeatherDetails[];
}
// enums
export const enum DeviceType {
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

// Config
export interface Config {
  weatherApi: {
    origin: string;
    currentWeatherPathname: string;
    forecastWeatherPathname: string;
  };
  weatherImage: {
    origin: string;
    pathname: string;
  };
}

// internal data structure
export interface WeatherDetails {
  minTemperature: string;
  maxTemperature: string;
  date: string;
  weatherIcon: string;
  weatherShortDescription: string;
}

export interface CityCoordinates {
  longitude: number;
  latitude: number;
}

// weather api structure

export interface WeatherApiCurrentWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherApiWeatherDetails[];
  base: string;
  main: {
    temp: string;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface WeatherApiWeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}
