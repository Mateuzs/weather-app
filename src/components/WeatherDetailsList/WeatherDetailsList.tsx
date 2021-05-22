// external
import React, { FunctionComponent, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
//types
import {
  WeatherDetailsElementProps,
  WeatherDetailsListProps,
} from "../../types";
// styles
import "./WeatherDetailsList.scss";
// constants, utils
import { config } from "../../config";
import {
  WEATHER_ICON_HEIGHT,
  WEATHER_ICON_WIDTH,
  URL_IMAGE_ID_PLACEHOLDER,
  TEMPERATURE_UNIT,
} from "../../constants";

const WeatherDetailsElement: FunctionComponent<WeatherDetailsElementProps> = ({
  weatherDetailsElement,
}) => {
  const {
    date,
    weatherIcon,
    weatherShortDescription,
    minTemperature,
    maxTemperature,
  } = weatherDetailsElement;
  const {
    weatherImage: {
      origin: weatherImageOrigin,
      pathname: weatherImagePathname,
    },
  } = config;
  const imageUrl = `${weatherImageOrigin}${weatherImagePathname.replace(
    URL_IMAGE_ID_PLACEHOLDER,
    weatherIcon
  )}`;

  return (
    <li className="weather-details-element">
      <p>{date} </p>
      <div className="weather-icon-container">
        <LazyLoadImage
          height={WEATHER_ICON_HEIGHT}
          src={imageUrl}
          width={WEATHER_ICON_WIDTH}
        />
      </div>
      <p>{weatherShortDescription} </p>
      <p>
        {minTemperature} {TEMPERATURE_UNIT}
      </p>
      <p>
        {maxTemperature} {TEMPERATURE_UNIT}
      </p>
    </li>
  );
};

const WeatherDetailsList: FunctionComponent<WeatherDetailsListProps> = ({
  weatherDetailsList,
}) => (
  <ul>
    {weatherDetailsList.map((weatherDetailsElement) => (
      <WeatherDetailsElement
        weatherDetailsElement={weatherDetailsElement}
        key={Math.random()}
      />
    ))}
  </ul>
);

export default memo(WeatherDetailsList);
