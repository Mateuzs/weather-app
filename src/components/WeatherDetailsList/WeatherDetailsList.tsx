// external
import { FunctionComponent, memo } from "react";
// components
import { WeatherDetailsElement } from "../../components";
//types
import { WeatherDetailsListProps } from "../../types";
// constants, utils
import {
  TITLE_DATE,
  TITLE_ICON,
  TITLE_DESCRIPTION,
  TITLE_LOW,
  TITLE_HIGH,
} from "../../constants";
// styles
import "./WeatherDetailsList.scss";

const WeatherDetailsList: FunctionComponent<WeatherDetailsListProps> = ({
  weatherDetailsList,
}) => (
  <table>
    <tbody>
      <tr className="weather-details-element">
        <th>{TITLE_DATE}</th>
        <th>{TITLE_ICON}</th>
        <th>{TITLE_DESCRIPTION}</th>
        <th>{TITLE_LOW}</th>
        <th>{TITLE_HIGH} </th>
      </tr>
      {weatherDetailsList.map((weatherDetailsElement) => (
        <WeatherDetailsElement
          weatherDetailsElement={weatherDetailsElement}
          key={Math.random()}
        />
      ))}
    </tbody>
  </table>
);

export default memo(WeatherDetailsList);
