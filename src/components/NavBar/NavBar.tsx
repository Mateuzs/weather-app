// external
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// components
import { NavBarButton } from "../../components";
// constansts, utils
import {
  ROUTE_WEATHER,
  ROUTE_MY_WEATHER_STATIONS,
  MY_WEATHER_STATIONS_BUTTON_LABEL,
  WEATHER_BUTTON_LABEL,
} from "../../constants";
// styles
import "./NavBar.scss";

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      <NavBarButton
        navigationLink={ROUTE_WEATHER}
        buttonText={WEATHER_BUTTON_LABEL}
      />
      <NavBarButton
        navigationLink={ROUTE_MY_WEATHER_STATIONS}
        buttonText={MY_WEATHER_STATIONS_BUTTON_LABEL}
      />
    </div>
  );
};

export default NavBar;
