// external
import { FunctionComponent, ChangeEvent, useCallback } from "react";
// types
import { WeatherStationInputElementProps } from "../../types";
// styles
import "./WeatherStationInputElement.scss";

const WeatherStationInputElement: FunctionComponent<WeatherStationInputElementProps> =
  ({
    inputValue,
    inputPlaceholder,
    inputDescription,
    onChangeCallback,
    isValidInputValue,
  }) => {
    const handleInputchange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChangeCallback(event.target.value);
      },
      []
    );

    const descriptionClassName =
      !!inputValue && !isValidInputValue
        ? "description-incorrect"
        : "description-correct";

    return (
      <div>
        <input
          className="weather-station-input"
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={handleInputchange}
        />
        <p className={descriptionClassName}>{inputDescription}</p>
      </div>
    );
  };

export default WeatherStationInputElement;
