import React from "react";
import PropTypes from "prop-types";

import styles from "./headline.module.scss";

const Headline = ({ level, type, children }) => {
  const TagName = "h" + level;

  return <TagName className={styles[type]}>{children}</TagName>;
};

Headline.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, "1", "2", "3", "4", "5", "6"]),
  type: PropTypes.oneOf(["headline", "subheadline"]),
  children: PropTypes.string
};

export default Headline;
