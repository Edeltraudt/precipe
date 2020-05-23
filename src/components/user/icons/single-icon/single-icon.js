import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import UserContext from "../../../../contexts/user-context";
import { useGroupColor } from "../../../../hooks/user-hooks";

import Tooltip from "./../../../core/tooltip/tooltip";

import styles from "./single-icon.module.scss";

const SingleIcon = ({ groupId, image, name, disableTooltip, isGroup }) => {
  const { user } = useContext(UserContext);

  return (
    <div
      className={classNames(styles.Wrap, { [styles.isGroup]: isGroup })}
      style={useGroupColor(groupId)}
    >
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
  groupId: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  disableTooltip: PropTypes.bool,
  isGroup: PropTypes.bool,
};

export default SingleIcon;
