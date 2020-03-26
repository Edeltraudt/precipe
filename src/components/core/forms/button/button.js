import React from "react";
import PropTypes from "prop-types";

import styles from "./button.module.scss";

const Button = ({ id, type, style, className, onClick, children }) => (
  <button
    id={id}
    type={type}
    className={[styles.Button, styles[style], className].join(" ")}
    onClick={e => {
      if (onClick) onClick(e);
    }}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.oneOf(["default", "danger", "link", "plain-link"])
};

Button.defaultProps = {
  type: "button",
  style: "default"
};

export default Button;
