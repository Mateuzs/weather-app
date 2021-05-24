// external
import { FunctionComponent, memo } from "react";
// types
import { ErrorMessageProps } from "../../types";
// styles
import "./ErrorMessage.scss";

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ errorMessage }) => (
  <h3 className="error-message">{errorMessage}</h3>
);

export default memo(ErrorMessage);
