import React, { useContext } from "react";
import PropTypes from "prop-types";

import UserContext from "../../../../contexts/user-context";

import Tooltip from "./../../../core/tooltip/tooltip";

import styles from "./single-icon.module.scss";

const SingleIcon = ({ image, name, disableTooltip }) => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Wrap}>
      {image ? (
        <img
          src={image}
          alt={name + " profile image."}
          className={styles.Icon}
        />
      ) : (
        <span className={styles.Icon}>{name.slice(0, 1)}</span>
      )}
      {!disableTooltip && (
        <Tooltip>{user && user.name === name ? "You" : name}</Tooltip>
      )}
    </div>
  );
};

SingleIcon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  disableTooltip: PropTypes.bool,
};

export default SingleIcon;
