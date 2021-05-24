// external
import { FunctionComponent, memo } from "react";
// types
import { MyWeatherStationsElementProps } from "../../types";
// styles
import "./MyWeatherStationsElement.scss";

const MyWeatherStationsElement: FunctionComponent<MyWeatherStationsElementProps> =
  ({ weatherStation, onDeleteCallback }) => {
    const { name, latitude, longitude, altitude } = weatherStation;

    return (
      <tr className="my-weather-stations-element">
        <td>{name}</td>
        <td>{latitude}</td>
        <td>{longitude}</td>
        <td>{altitude}</td>
        <td>
          <button onClick={() => onDeleteCallback(name)}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
    );
  };

export default memo(MyWeatherStationsElement);
