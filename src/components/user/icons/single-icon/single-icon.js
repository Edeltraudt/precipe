import React, { useContext } from "react";
import PropTypes from "prop-types";

import UserContext from "../../../../contexts/user-context";

import Tooltip from "./../../../core/tooltip/tooltip";

import styles from "./single-icon.module.scss";

export const UserIcon = ({ image, name, disableTooltip, onClick }) => {
  const currentUser = useContext(UserContext);
  const TagName = onClick ? "button" : "div";
  const props = onClick
    ? { type: "button", onClick: e => onClick(name) }
    : {};

  return (
    <TagName className={styles.Wrap} {...props}>
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
        <Tooltip>{currentUser.name === name ? "You" : name}</Tooltip>
      )}
    </TagName>
  );
};

UserIcon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  disableTooltip: PropTypes.bool,
  onClick: PropTypes.func
};
