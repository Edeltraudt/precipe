import React from "react";
import PropTypes from "prop-types";

import styles from "./headline.module.scss";

export const Headline = props => {
  const TagName = "h" + props.level;

  return <TagName className={styles[props.type]}>{props.children}</TagName>;
};

Headline.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, "1", "2", "3", "4", "5", "6"]),
  children: PropTypes.string
};
