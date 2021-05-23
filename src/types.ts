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

export interface ErrorMessageProps {
  errorMessage: string;
}

export interface WeatherStationInputFormProps {
  onCloseHandler: (weatherStation: WeatherStation) => void;
  weatherStationList: WeatherStation[];
}

export interface WeatherStationInputElementProps {
  inputValue: string;
  inputPlaceholder: string;
  inputDescription: string;
  onChangeCallback: (event: string) => void;
  isValidInputValue: boolean;
}

export interface MyWeatherStationsListProps {
  weatherStationsList: WeatherStation[];
  onDeleteCallback: (stationName: string) => void;
}

export interface MyWeatherStationsElementProps {
  weatherStation: WeatherStation;
  onDeleteCallback: (stationName: string) => void;
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

export interface CityLocation {
  cityName: string;
  longitude: number;
  latitude: number;
}

export interface WeatherStation {
  name: string;
  longitude: string;
  latitude: string;
  altitude: string;
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

export interface WeatherApiForecastWeather {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherApiForecastWeatherSample[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: number;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface WeatherApiForecastWeatherSample {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherApiWeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// enums
export const enum DeviceType {
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

export const enum WeatherType {
  CURRENT = "current",
  FORECAST = "forecast",
}
