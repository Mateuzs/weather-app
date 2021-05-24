// external
import { FunctionComponent } from "react";
// constants
import { LOADING_INFO } from "../../constants";
// styles
import "./LoadingComponent.scss";

const LoadingComponent: FunctionComponent = () => (
  <div className="loading-component">
    <h3>{LOADING_INFO}</h3>
  </div>
);

export default LoadingComponent;
