// external
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// components
import { NavBarButton } from "../../components";
// styles
import "./NavBar.scss";
// constansts, utils
import { ROUTE_WEATHER, ROUTE_MY_WEATHER_STATIONS } from "../../constants";

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-bar">
      <NavBarButton navigationLink={ROUTE_WEATHER} buttonText="Weather" />
      <NavBarButton
        navigationLink={ROUTE_MY_WEATHER_STATIONS}
        buttonText="My weather stations"
      />
    </div>
  );
};

export default NavBar;
