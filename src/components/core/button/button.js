import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./button.module.scss";

export const Button = props => (
  <button
    id={props.id}
    type={props.type}
    className={[styles.Button, props.className].join(" ")}
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
  type: PropTypes.string
};

Button.defaultProps = {
  type: "button"
};
