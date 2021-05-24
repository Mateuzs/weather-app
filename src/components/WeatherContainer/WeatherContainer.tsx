// external
import { FunctionComponent, ChangeEvent, useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";
// components
import { WeatherMapContainer, WeatherDetailsList, ErrorMessage } from "../../components";
//types
import {
  CityLocation,
  DeviceType,
  WeatherType,
  WeatherApiCurrentWeather,
  WeatherDetails,
  WeatherApiForecastWeather,
} from "../../types";
// constants, utils
import { config } from "../../config";
import {
  SEARCHING_ERROR_MESSAGE,
  CITY_NAME_PLACEHOLDER,
  CELSIUS_UNITS_QUERY_PARAM,
  SEARCH_LABEL,
  CURRENT_WEATHER_BUTTON_LABEL,
  FORECAST_WEATHER_BUTTON_LABEL,
  EMPTY_WEATHER_DETAILS_PLACEHOLDER_DESCRIPTION,
  WEATHER_FOR_DESCRIPTION,
} from "../../constants";
import {
  getCityLocation,
  mapCurrentWeatherDataToWeatherDetailsList,
  mapForecastWeatherDataToWeatherDetailsList,
  recognizeDeviceType,
} from "../../utils";
// styles
import "./WeatherContainer.scss";

const WeatherContainer: FunctionComponent = () => {
  // environment variabels are passed via webpack plugin during build
  // in order to not hardcode vulnerable data in codebase
  const weatherApiKey = process.env.WEATHER_API_KEY;
  const {
    weatherApi: { origin: weatherApiOrigin, currentWeatherPathname, forecastWeatherPathname },
  } = config;

  const deviceType = useMemo(() => recognizeDeviceType(), []);

  const [weatherType, setWeatherType] = useState<WeatherType>(WeatherType.CURRENT);
  const [inputField, setInputField] = useState<string>("");
  const [searchCityName, setSearchCityName] = useState<string>("");
  const [searchingError, setSearchingError] = useState<boolean>(false);
  const [cityLocation, setCityLocation] = useState<CityLocation | null>(null);
  const [weatherDetailsList, setWeatherDetailsList] = useState<WeatherDetails[]>([]);

  const displayWeatherDetailsList = !searchingError && cityLocation && weatherDetailsList.length;

  const displayDetailPlaceholder = !searchingError && !cityLocation && !weatherDetailsList.length;

  const currentWeatherButtonClassName =
    weatherType === WeatherType.CURRENT ? "active-weather-config-button" : "weather-config-button";

  const forecastWeatherButtonClassName =
    weatherType === WeatherType.FORECAST ? "active-weather-config-button" : "weather-config-button";

  const handleSearchButtonClick = () => setSearchCityName(inputField);

  const handleWeatherButtonClick = useCallback((wType: WeatherType) => setWeatherType(wType), []);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputField(event.target.value);
  }, []);

  const fetchCurrentWeatherData = async (city: string) => {
    const weatherApiUrl = `${weatherApiOrigin}${currentWeatherPathname}?q=${city}&units=${CELSIUS_UNITS_QUERY_PARAM}&appid=${weatherApiKey}`;
    try {
      const weatherData = (await axios.get(weatherApiUrl)).data as WeatherApiCurrentWeather;

      const currentWeatherDetailsList = mapCurrentWeatherDataToWeatherDetailsList(weatherData);
      const currentCityLocation = getCityLocation(weatherData);

      setCityLocation(currentCityLocation);
      setWeatherDetailsList(currentWeatherDetailsList);
      setSearchingError(false);
    } catch (error) {
      setSearchingError(true);
    }
  };

  const fetchForecastWeatherData = async (city: string) => {
    const weatherApiUrl = `${weatherApiOrigin}${forecastWeatherPathname}?q=${city}&units=${CELSIUS_UNITS_QUERY_PARAM}&appid=${weatherApiKey}`;
    try {
      const weatherData = (await axios.get(weatherApiUrl)).data as WeatherApiForecastWeather;

      const forecastWeatherDetailsList = mapForecastWeatherDataToWeatherDetailsList(weatherData);
      const forecastCityLocation = getCityLocation(weatherData);

      setCityLocation(forecastCityLocation);
      setWeatherDetailsList(forecastWeatherDetailsList);
      setSearchingError(false);
    } catch (error) {
      console.log(error);
      setSearchingError(true);
    }
  };

  // in this simplified solution, every search and view change hits the API in order to get fresh weather data
  // in real scenario it needs discusing the caching strategy and providing thundering herd protecion solution
  // it may cause a huge traffic on the backend services
  useEffect(() => {
    if (searchCityName) {
      switch (weatherType) {
        case WeatherType.CURRENT:
          fetchCurrentWeatherData(searchCityName);
          break;
        case WeatherType.FORECAST:
          fetchForecastWeatherData(searchCityName);
          break;
      }
    }
  }, [searchCityName, weatherType]);

  return (
    <div className="weather-container">
      <div className="weather-config-container">
        <div className="weather-config-input-container">
          <input
            value={inputField}
            placeholder={CITY_NAME_PLACEHOLDER}
            onChange={handleInputChange}
            className="weather-config-input-field"
          ></input>
          <button onClick={handleSearchButtonClick} className="weather-config-confirm-button">
            {SEARCH_LABEL}
          </button>
        </div>
        <div className="weather-config-buttons">
          <button
            onClick={() => handleWeatherButtonClick(WeatherType.CURRENT)}
            className={currentWeatherButtonClassName}
          >
            {CURRENT_WEATHER_BUTTON_LABEL}
          </button>
          <button
            onClick={() => handleWeatherButtonClick(WeatherType.FORECAST)}
            className={forecastWeatherButtonClassName}
          >
            {FORECAST_WEATHER_BUTTON_LABEL}
          </button>
        </div>
      </div>
      {searchingError && <ErrorMessage errorMessage={SEARCHING_ERROR_MESSAGE} />}

      {displayWeatherDetailsList && (
        <>
          <h3>
            {weatherType} {WEATHER_FOR_DESCRIPTION} {cityLocation!.cityName}
          </h3>
          <div className="weather-details-container">
            <WeatherDetailsList weatherDetailsList={weatherDetailsList} />
            <WeatherMapContainer
              longitude={cityLocation!.longitude}
              latitude={cityLocation!.latitude}
              deviceType={deviceType}
            />
          </div>
        </>
      )}
      {displayDetailPlaceholder && (
        <h4 className="empty-weather-details-placeholder">
          {EMPTY_WEATHER_DETAILS_PLACEHOLDER_DESCRIPTION}
        </h4>
      )}
    </div>
  );
};

export default WeatherContainer;
