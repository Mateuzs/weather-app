// external
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// styles
import "./Header.scss";

const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <Link className="header-link" to="/weather">
        Weather
      </Link>
      <Link className="header-link" to="/my-weather-stations">
        My weather stations
      </Link>
    </div>
  );
};

export default Header;
