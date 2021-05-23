const validateStationAltitude = (stationAltitude: string) => {
  const regexPattern = /^[\+\-]?\d*\.?\d+$/;
  return regexPattern.test(stationAltitude);
};

export default validateStationAltitude;
