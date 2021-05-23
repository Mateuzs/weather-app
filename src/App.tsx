// external
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import {
  NavBar,
  WeatherContainer,
  MyWeatherStationsContainer,
  Home,
  NotFoundPage,
} from "./components";
// constants, utils
import {
  ROUTE_WEATHER,
  ROUTE_MY_WEATHER_STATIONS,
  ROUTE_DEFAULT,
  ROUTE_NOT_FOUND,
} from "./constants";
// styles
import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path={ROUTE_DEFAULT} exact>
            <Home />
          </Route>
          <Route path={ROUTE_WEATHER}>
            <WeatherContainer />
          </Route>
          <Route path={ROUTE_MY_WEATHER_STATIONS}>
            <MyWeatherStationsContainer />
          </Route>
          <Route path={ROUTE_NOT_FOUND}>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
