// external
import React, { FunctionComponent } from "react";
//types
// styles
import "./WeatherContainer.scss";

const WeatherContainer: FunctionComponent = () => {
  const weatherApiKey = process.env.WEATHER_API_KEY;
  return (
    <div className="weather-container">
      <p>Weather</p>
      <p>{weatherApiKey}</p>
    </div>
  );
};

export default WeatherContainer;
