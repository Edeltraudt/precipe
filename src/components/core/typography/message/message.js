import React from "react";
import PropTypes from "prop-types";

import * as styles from "./message.module.scss";

const Message = ({ children, className, theme, size }) => {
  return <p className={`${styles.Message} ${className} ${styles[size]} ${styles[theme]}`}>{children}</p>;
};

Message.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(["default", "danger", "info", false]),
  size: PropTypes.oneOf(["s", "default"])
};

Message.defaultProps = {
  theme: "default",
  size: "default"
};

export default Message;
