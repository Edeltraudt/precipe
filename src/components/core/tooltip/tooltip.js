import React from "react";

import styles from "./tooltip.module.scss";

export const Tooltip = props => {
  return <span className={styles.Tooltip}>{props.children}</span>;
};
