// external
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import {
  Header,
  WeatherContainer,
  MyWeatherStationsContainer,
} from "./components";
// styles
import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <Router>
        <Header />
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
