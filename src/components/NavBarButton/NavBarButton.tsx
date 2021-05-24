// external
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// types
import { NavBarButtonProps } from "../../types";
// styles
import "./NavBarButton.scss";

const NavBarButton: FunctionComponent<NavBarButtonProps> = ({ navigationLink, buttonText }) => (
  <Link className="nav-bar-button" to={navigationLink}>
    {buttonText}
  </Link>
);

export default NavBarButton;
