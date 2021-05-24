// external
import { FunctionComponent, useState, useEffect } from "react";
// components
import { WeatherStationInputElement } from "../../components";
// types
import { WeatherStationInputFormProps } from "../../types";
// constants, utils
import {
  validateStationName,
  validateStationLatitude,
  validateStationLongitude,
  validateStationAltitude,
} from "../../utils";
import {
  WEATHER_STATION_NAME_DESCRIPTION,
  WEATHER_STATION_NAME_PLACEHOLDER,
  WEATHER_STATION_LATITUDE_DESCRIPTION,
  WEATHER_STATION_LATITUDE_PLACEHOLDER,
  WEATHER_STATION_LONGITUDE_DESCRIPTION,
  WEATHER_STATION_LONGITUDE_PLACEHOLDER,
  WEATHER_STATION_ALTITUDE_DESCRIPTION,
  WEATHER_STATION_ALTITUDE_PLACEHOLDER,
  WEATHER_STATION_SAVE_BUTTON,
} from "../../constants";
// styles
import "./WeatherStationInputForm.scss";

const WeatherStationInputForm: FunctionComponent<WeatherStationInputFormProps> = ({
  onCloseHandler,
  weatherStationList,
}) => {
  const [stationName, setStationName] = useState<string>("");
  const [stationLatitude, setStationLatitude] = useState<string>("");
  const [stationLongitude, setStationLongitude] = useState<string>("");
  const [stationAltitude, setStationAltitude] = useState<string>("");

  const [isValidStationName, setIsValidStationName] = useState<boolean>(true);
  const [isValidStationLatitude, setIsValidStationLatitude] = useState<boolean>(true);
  const [isValidStationLongitude, setIsValidStationLongitude] = useState<boolean>(true);
  const [isValidStationAltitude, setIsValidStationAltitude] = useState<boolean>(true);

  const eligibleToSave = [
    isValidStationName,
    isValidStationLatitude,
    isValidStationLongitude,
    isValidStationAltitude,
  ].every((e) => e === true);

  const saveButtonClassName = eligibleToSave ? "save-button" : "save-button-disabled";

  useEffect(() => {
    setIsValidStationName(validateStationName(stationName, weatherStationList));
  }, [stationName]);

  useEffect(() => {
    setIsValidStationLatitude(validateStationLatitude(stationLatitude));
  }, [stationLatitude]);

  useEffect(() => {
    setIsValidStationLongitude(validateStationLongitude(stationLongitude));
  }, [stationLongitude]);
  useEffect(() => {
    setIsValidStationAltitude(validateStationAltitude(stationAltitude));
  }, [stationAltitude]);

  return (
    <div className="input-form-container">
      <div className="input-form">
        <div className="input-elements">
          <WeatherStationInputElement
            inputValue={stationName}
            inputDescription={WEATHER_STATION_NAME_DESCRIPTION}
            inputPlaceholder={WEATHER_STATION_NAME_PLACEHOLDER}
            isValidInputValue={isValidStationName}
            onChangeCallback={setStationName}
          />
          <WeatherStationInputElement
            inputValue={stationLatitude}
            inputDescription={WEATHER_STATION_LATITUDE_DESCRIPTION}
            inputPlaceholder={WEATHER_STATION_LATITUDE_PLACEHOLDER}
            isValidInputValue={isValidStationLatitude}
            onChangeCallback={setStationLatitude}
          />
        </div>
        <div className="input-elements">
          <WeatherStationInputElement
            inputValue={stationLongitude}
            inputDescription={WEATHER_STATION_LONGITUDE_DESCRIPTION}
            inputPlaceholder={WEATHER_STATION_LONGITUDE_PLACEHOLDER}
            isValidInputValue={isValidStationLongitude}
            onChangeCallback={setStationLongitude}
          />
          <WeatherStationInputElement
            inputValue={stationAltitude}
            inputDescription={WEATHER_STATION_ALTITUDE_DESCRIPTION}
            inputPlaceholder={WEATHER_STATION_ALTITUDE_PLACEHOLDER}
            isValidInputValue={isValidStationAltitude}
            onChangeCallback={setStationAltitude}
          />
        </div>
      </div>
      <button
        className={saveButtonClassName}
        disabled={!eligibleToSave}
        onClick={() =>
          onCloseHandler({
            name: stationName,
            longitude: stationLongitude,
            latitude: stationLongitude,
            altitude: stationAltitude,
          })
        }
      >
        {WEATHER_STATION_SAVE_BUTTON}
      </button>
    </div>
  );
};

export default WeatherStationInputForm;
