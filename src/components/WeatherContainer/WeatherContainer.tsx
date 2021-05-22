// external
import React, {
  FunctionComponent,
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";
// components
import { WeatherMapContainer, WeatherDetailsList } from "../../components";
//types
import {
  CityCoordinates,
  DeviceType,
  WeatherApiCurrentWeather,
  WeatherDetails,
} from "../../types";
// styles
import "./WeatherContainer.scss";
// constants, utils
import { config } from "../../config";
import {
  getCityCoordinates,
  mapWeatherDataToWeatherDetailsList,
} from "../../utils";

const WeatherContainer: FunctionComponent = () => {
  const weatherApiKey = process.env.WEATHER_API_KEY;
  const {
    weatherApi: {
      origin: weatherApiOrigin,
      currentWeatherPathname,
      forecastWeatherPathname,
    },
  } = config;

  const [inputField, setInputField] = useState<string>("Krakow");
  const [cityName, setCityName] = useState<string>("Krakow");
  const [cityCoordinates, setCityCoordinates] = useState<CityCoordinates>({
    longitude: 19.9167,
    latitude: 50.0833,
  });
  const [weatherDetailsList, setWeatherDetailsList] = useState<
    WeatherDetails[]
  >([]);

  const handleSearchButtonClick = () => setCityName(inputField);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputField(event.target.value);
    },
    []
  );

  const fetchCurrentWeatherData = async (city: string) => {
    const weatherApiUrl = `${weatherApiOrigin}${currentWeatherPathname}?q=${city}&units=metric&appid=${weatherApiKey}`;
    const weatherData = (await axios.get(weatherApiUrl))
      .data as WeatherApiCurrentWeather;

    const currentWeatherDetailsList =
      mapWeatherDataToWeatherDetailsList(weatherData);
    const currentCityCoordinates = getCityCoordinates(weatherData);
    console.log(currentCityCoordinates);
    setCityCoordinates(currentCityCoordinates);
    setWeatherDetailsList(currentWeatherDetailsList);
  };

  useEffect(() => {
    fetchCurrentWeatherData(cityName);
  }, [cityName]);

  return (
    <div className="weather-container">
      <div className="weather-config-container">
        <div className="weather-config-input-container">
          <input
            value={inputField}
            onChange={handleInputChange}
            className="weather-config-input-field"
          ></input>
          <button
            onClick={handleSearchButtonClick}
            className="weather-config-confirm-button"
          >
            Search!
          </button>
        </div>
        <div className="weather-config-buttons">
          <button className="weather-config-button">Current weather</button>
          <button className="weather-config-button">5 days forecast</button>
        </div>
      </div>
      <h3>Current weather for {cityName}</h3>
      <div className="weather-details-container">
        <WeatherDetailsList weatherDetailsList={weatherDetailsList} />
        <WeatherMapContainer
          longitude={cityCoordinates.longitude}
          latitude={cityCoordinates.latitude}
          deviceType={DeviceType.DESKTOP}
        />
      </div>
    </div>
  );
};

export default WeatherContainer;
