import React from "react";
import PropTypes from "prop-types";

import styles from "./headline.module.scss";

const Headline = ({ level, type, children, className }) => {
  const TagName = "h" + level;

  return (
    <TagName className={`${styles[type]} ${className}`}>{children}</TagName>
  );
};

Headline.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, "1", "2", "3", "4", "5", "6"]),
  type: PropTypes.oneOf(["title", "headline", "subheadline", "label"]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

Headline.defaultProps = {
  className: "",
  level: 2
};

export default Headline;
