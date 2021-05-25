// external
import { FunctionComponent, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import LoadingComponent from "./components/LoadingComponent";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
// constants, utils
import {
  ROUTE_WEATHER,
  ROUTE_MY_WEATHER_STATIONS,
  ROUTE_DEFAULT,
  ROUTE_NOT_FOUND,
} from "./constants";
// styles
import "./App.scss";

// lazy loaded components
const WeatherContainer = lazy(() => import("./components/WeatherContainer"));
const MyWeatherStationsContainer = lazy(() => import("./components/MyWeatherStationsContainer"));

const App: FunctionComponent = () => {
  return (
    <div className="App-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path={ROUTE_DEFAULT} exact component={Home} />
          <Suspense fallback={<LoadingComponent />}>
            <Route path={ROUTE_WEATHER} component={WeatherContainer} />
            <Route path={ROUTE_MY_WEATHER_STATIONS} component={MyWeatherStationsContainer} />
          </Suspense>
          <Route path={ROUTE_NOT_FOUND} component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
