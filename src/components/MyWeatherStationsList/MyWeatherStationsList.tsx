// external
import { FunctionComponent, memo } from "react";
// components
import { MyWeatherStationsElement } from "../../components";
// types
import { MyWeatherStationsListProps } from "../../types";
// constants, utils
import {
  STATION_NAME,
  STATION_LATITUDE,
  STATION_LONGITUDE,
  STATION_ALTITUDE,
} from "../../constants";
// styles
import "./MyWeatherStationsList.scss";

const MyWeatherStatonsList: FunctionComponent<MyWeatherStationsListProps> = ({
  weatherStationsList,
  onDeleteCallback,
}) => (
  <table>
    <tbody>
      <tr className="my-weather-stations-element">
        <th>{STATION_NAME}</th>
        <th>{STATION_LATITUDE}</th>
        <th>{STATION_LONGITUDE}</th>
        <th>{STATION_ALTITUDE}</th>
      </tr>
      {weatherStationsList.map((weatherStation) => (
        <MyWeatherStationsElement
          weatherStation={weatherStation}
          onDeleteCallback={onDeleteCallback}
          key={Math.random()}
        />
      ))}
    </tbody>
  </table>
);

export default memo(MyWeatherStatonsList);
