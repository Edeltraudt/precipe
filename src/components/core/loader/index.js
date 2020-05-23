import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./loader.module.scss";

const Loader = ({ active }) => (
  <div className={classNames(styles.Wrap, { [styles.active]: active })}>
    <div className={styles.Loader} aria-label="Page is loading..."></div>
  </div>
);

Loader.propTypes = {
  active: PropTypes.bool,
};

Loader.defaultProps = {
  active: false,
};

export default Loader;
