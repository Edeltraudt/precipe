import React from "react";

import styles from "./tooltip.module.scss";

const Tooltip = ({ children }) => {
  return <span className={styles.Tooltip}>{children}</span>;
};

export default Tooltip;
