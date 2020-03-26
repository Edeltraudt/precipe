import React from "react";
import PropTypes from "prop-types";

import Tooltip from "./../../../core/tooltip/tooltip";

import styles from "./single-icon.module.scss";

export const UserIcon = ({ image, name }) => (
  <div className={styles.Wrap}>
    {image ? (
      <img src={image} alt={name + " profile image."} className={styles.Icon} />
    ) : (
      <span className={styles.Icon}>{name.slice(0, 1)}</span>
    )}
    <Tooltip>{name}</Tooltip>
  </div>
);

UserIcon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
};
