import React from "react";
import PropTypes from "prop-types";

import * as styles from "./message.module.scss";

const Message = ({ children, className, style, size }) => {
  return <p className={`${styles.Message} ${className} ${styles[size]} ${styles[style]}`}>{children}</p>;
};

Message.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOf(["default", "danger", "info", false]),
  size: PropTypes.oneOf(["s", "default"])
};

Message.defaultProps = {
  style: "default",
  size: "default"
};

export default Message;
