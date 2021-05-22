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

const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/weather">
            <WeatherContainer />
          </Route>
          <Route path="/my-weather-stations">
            <MyWeatherStationsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
