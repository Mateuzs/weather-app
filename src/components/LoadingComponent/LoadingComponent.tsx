// external
import { FunctionComponent } from "react";
// constants
import { HOME_TITLE } from "../../constants";
// styles
import "./LoadingComponent.scss";

const LoadingComponent: FunctionComponent = () => (
  <div className="loading-component">
    <h3>{HOME_TITLE}</h3>
  </div>
);

export default LoadingComponent;
