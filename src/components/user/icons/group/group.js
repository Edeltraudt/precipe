import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "./../../../core/icon/icon";
import { UserIcon } from "./../single-icon/single-icon";

import styles from "./group.module.scss";

export const UserIconGroup = ({ size, groupId, editable }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO: get all group members and group color
    if (groupId) {
      setUsers([{ name: "Laureena" }, { name: "Tim" }]);
    }
  }, [groupId]);

  return (
    <div className={styles.Wrap}>
      <ul className={styles.List}>
        {users.map((user, index) => (
          <li className={[styles.Item, styles[size]].join(" ")} key={index}>
            <UserIcon name={user.name} image={user.image} label={user.label} />
          </li>
        ))}
      </ul>

      {editable && (
        <button className={styles.Add} aria-label="Add user" type="button">
          <Icon className={styles.AddIcon} name="plus" />
        </button>
      )}
    </div>
  );
};

UserIconGroup.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  groupId: PropTypes.number,
  editable: PropTypes.bool
};
