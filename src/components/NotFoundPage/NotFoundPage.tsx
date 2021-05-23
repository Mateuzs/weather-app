// external
import { FunctionComponent } from "react";
// constants
import { NOT_FOUND_TITLE } from "../../constants";
// styles
import "./NotFoundPage.scss";

const NotFoundPage: FunctionComponent = () => (
  <div className="not-found-page-container">
    <h3>{NOT_FOUND_TITLE}</h3>
  </div>
);

export default NotFoundPage;
