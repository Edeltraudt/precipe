import React from "react";
import PropTypes from "prop-types";

import { Tooltip } from "./../tooltip/tooltip";

import styles from "./user-icon.module.scss";

export const UserIcon = props => (
  <div className={styles.Wrap}>
    {props.image ? (
      <img
        src={props.image}
        alt={props.name + " profile image."}
        className={styles.Icon}
      />
    ) : (
      <span className={styles.Icon}>{props.name.slice(0, 1)}</span>
    )}
    <Tooltip>{props.name}</Tooltip>
  </div>
);

UserIcon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
};
