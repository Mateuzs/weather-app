// external
import { FunctionComponent, useState, useCallback, useEffect } from "react";
// components
import {
  WeatherStationInputForm,
  MyWeatherStationsList,
} from "../../components";
// types
import { WeatherStation } from "../../types";
// utils, constants
import {
  STORAGE_EVENT_NAME,
  MY_WEATHER_STATIONS_OBJECT_NAME,
  ADD_STATION_BUTTON_LABEL,
  EMPTY_STATION_LIST_PLACEHOLDER_DESCRIPTION,
} from "../../constants";
// styles
import "./MyWeatherStationsContainer.scss";

const MyWeatherStationsContainer: FunctionComponent = () => {
  const [showWeatherStationInputForm, setShowWeatherStationInputForm] =
    useState(false);

  const [weatherStationList, setWeatherStationList] = useState<
    WeatherStation[]
  >([]);

  const handleAddingButtonClick = useCallback(
    () => setShowWeatherStationInputForm(true),
    []
  );

  const onDeleteCallback = (weatherStationName: string) => {
    const reducedWeatherStationsList = weatherStationList.filter(
      (wStation) => wStation.name !== weatherStationName
    );
    localStorage.setItem(
      MY_WEATHER_STATIONS_OBJECT_NAME,
      JSON.stringify(reducedWeatherStationsList)
    );
    window.dispatchEvent(new Event(STORAGE_EVENT_NAME));
  };

  const onCloseWeatherInputFormCallback = (weatherStation: WeatherStation) => {
    setShowWeatherStationInputForm(false);
    const newWeatherStationsList = [...weatherStationList, weatherStation];
    localStorage.setItem(
      MY_WEATHER_STATIONS_OBJECT_NAME,
      JSON.stringify(newWeatherStationsList)
    );
    window.dispatchEvent(new Event(STORAGE_EVENT_NAME));
  };

  const getWeatherStationsFromLocalStorage = () => {
    const savedWeatherStations = localStorage.getItem(
      MY_WEATHER_STATIONS_OBJECT_NAME
    );

    if (savedWeatherStations) {
      const parsedWeatherStations = JSON.parse(savedWeatherStations);
      if (Array.isArray(parsedWeatherStations)) {
        setWeatherStationList(parsedWeatherStations as WeatherStation[]);
      }
    }
  };

  useEffect(() => {
    getWeatherStationsFromLocalStorage();
  }, []);

  useEffect(() => {
    window.addEventListener(
      STORAGE_EVENT_NAME,
      getWeatherStationsFromLocalStorage
    );

    return () =>
      window.removeEventListener(
        STORAGE_EVENT_NAME,
        getWeatherStationsFromLocalStorage
      );
  }, []);

  return (
    <div className="my-weather-stations-container">
      {showWeatherStationInputForm && (
        <WeatherStationInputForm
          weatherStationList={weatherStationList}
          onCloseHandler={onCloseWeatherInputFormCallback}
        />
      )}
      <button className="add-station-button" onClick={handleAddingButtonClick}>
        {ADD_STATION_BUTTON_LABEL}
      </button>
      {!!weatherStationList.length && (
        <MyWeatherStationsList
          weatherStationsList={weatherStationList}
          onDeleteCallback={onDeleteCallback}
        />
      )}
      {!weatherStationList.length && (
        <h4 className="empty-station-list-placeholder">
          {EMPTY_STATION_LIST_PLACEHOLDER_DESCRIPTION}
        </h4>
      )}
    </div>
  );
};

export default MyWeatherStationsContainer;
