import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./button.module.scss";

const Button = props => (
  <button
    id={props.id}
    type={props.type}
    className={[styles.Button, styles[props.style], props.className].join(" ")}
    onClick={e => {
      if (props.onClick) props.onClick(e);
    }}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.oneOf(['default', 'danger'])
};

Button.defaultProps = {
  type: "button",
  style: "default"
};

export default Button;
