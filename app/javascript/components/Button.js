import React from "react";
import PropTypes from "prop-types";
import { classnames } from "../utils/classnames";

const Button = ({ onClick, rounded, type, disabled, className, ...props }) => (
  <button
    className={classnames("button", type, className, {
      disabled,
      rounded
    })}
    onClick={e => {
      if (disabled) {
        return;
      }
      onClick(e);
    }}
    {...props}
  />
);
Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "positive", "danger"])
};
export default Button;
