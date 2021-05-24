// constanst, utils
import { LONGITUDE_MIN, LONGITUDE_MAX } from "../constants";

const validateStationLongitude = (stationLongitude: string) => {
  const regexPattern = /^[\+\-]?\d*\.?\d+$/;
  const stationLongitudeNumber = parseFloat(stationLongitude);

  return (
    regexPattern.test(stationLongitude) &&
    typeof stationLongitudeNumber === "number" &&
    stationLongitudeNumber <= LONGITUDE_MAX &&
    stationLongitudeNumber >= LONGITUDE_MIN
  );
};
export default validateStationLongitude;
