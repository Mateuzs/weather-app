// constanst, utils
import { LATITUDE_MIN, LATITUDE_MAX } from "../constants";

const validateStationLatitude = (stationLatitude: string) => {
  const regexPattern = /^[\+\-]?\d*\.?\d+$/;
  const stationLatitudeNumber = parseFloat(stationLatitude);

  return (
    regexPattern.test(stationLatitude) &&
    typeof stationLatitudeNumber === "number" &&
    stationLatitudeNumber <= LATITUDE_MAX &&
    stationLatitudeNumber >= LATITUDE_MIN
  );
};
export default validateStationLatitude;
