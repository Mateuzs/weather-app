// external
import { FunctionComponent, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
//types
import { WeatherDetailsElementProps } from "../../types";
// constants, utils
import { config } from "../../config";
import {
  WEATHER_ICON_HEIGHT,
  WEATHER_ICON_WIDTH,
  URL_IMAGE_ID_PLACEHOLDER,
  TEMPERATURE_UNIT,
} from "../../constants";
// styles
import "./WeatherDetailsElement.scss";

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
    <tr className="weather-details-element">
      <td>{date}</td>
      <td className="weather-icon-container">
        <LazyLoadImage
          height={WEATHER_ICON_HEIGHT}
          src={imageUrl}
          width={WEATHER_ICON_WIDTH}
        />
      </td>
      <td>{weatherShortDescription}</td>
      <td>
        {minTemperature} {TEMPERATURE_UNIT}
      </td>
      <td>
        {maxTemperature} {TEMPERATURE_UNIT}
      </td>
    </tr>
  );
};

export default memo(WeatherDetailsElement);
