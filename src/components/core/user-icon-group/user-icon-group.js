import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { UserIcon } from "./../user-icon/user-icon";

import styles from "./icon-group.module.scss";

export const UserIconGroup = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO: get all group members and group color
    setUsers([{ name: "Laureena" }, { name: "Tim" }]);
  }, []);

  return (
    <ul className={styles.List}>
      {users.map((user, index) => (
        <li className={[styles.Item, styles[props.size]].join(" ")} key={index}>
          <UserIcon name={user.name} image={user.image} label={user.label} />
        </li>
      ))}
    </ul>
  );
};

UserIconGroup.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  groupId: PropTypes.number.isRequired
};
