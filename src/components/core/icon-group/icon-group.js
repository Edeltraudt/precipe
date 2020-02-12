import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Icon } from "./../icon/icon";

import styles from "./icon-group.module.scss";

export const IconGroup = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO: get all group members and group color
    setUsers([{ name: "Laureena" }, { name: "Tim" }]);
  }, []);

  return (
    <ul className={styles.List}>
      {users.map((user, index) => (
        <li className={[styles.Item, styles[props.size]].join(" ")} key={index}>
          <Icon name={user.name} image={user.image} label={user.label} />
        </li>
      ))}
    </ul>
  );
};

IconGroup.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  groupId: PropTypes.number.isRequired
};
