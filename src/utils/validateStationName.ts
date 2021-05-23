// types
import { WeatherStation } from "../types";

const validateStationName = (
  stationName: string,
  weatherStationList: WeatherStation[]
) =>
  !weatherStationList.some(
    (weatherStation) => weatherStation.name === stationName
  );

export default validateStationName;
