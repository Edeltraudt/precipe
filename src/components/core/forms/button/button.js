import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./button.module.scss";

const Button = ({ id, type, theme, className, onClick, children, href }) =>
  href ? (
    <Link id={id} className={`${styles.Button} ${styles["plain-link"]} ${className}`} to={href}>
      {children}
    </Link>
  ) : (
    <button
      id={id}
      type={type}
      className={[styles.Button, styles[theme], className].join(" ")}
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
  theme: PropTypes.oneOf(["default", "danger", "secure", "link", "plain-link"]),
  href: PropTypes.string
};

Button.defaultProps = {
  type: "button",
  theme: "default"
};

export default Button;
