// external
import { FunctionComponent } from "react";
// constants
import { HOME_TITLE } from "../../constants";
// styles
import "./Home.scss";

const Home: FunctionComponent = () => (
  <div className="home-container">
    <h3>{HOME_TITLE}</h3>
    <h4>ADDITIONAL INFO</h4>
  </div>
);

export default Home;
