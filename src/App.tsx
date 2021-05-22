// external
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import {
  NavBar,
  WeatherContainer,
  MyWeatherStationsContainer,
} from "./components";
// styles
import "./App.scss";
// constants, utils
import {
  ROUTE_WEATHER,
  ROUTE_MY_WEATHER_STATIONS,
  ROUTE_DEFAULT,
} from "./constants";

const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path={ROUTE_WEATHER}>
            <WeatherContainer />
          </Route>
          <Route path={ROUTE_MY_WEATHER_STATIONS}>
            <MyWeatherStationsContainer />
          </Route>
          <Route path={ROUTE_DEFAULT}>
            <div></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
