import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import AddUsersMenu from "./add-users-menu";
import Icon from "./../../../core/icon";
import UserIcon from "./../single-icon/single-icon";

import styles from "./group.module.scss";

const availableUsers = [
  { id: 2, name: "Cordula" },
  { id: 3, name: "Ulrike" },
  { id: 4, name: "Benny" },
  { id: 5, name: "Tanja" },
  { id: 6, name: "Johannes" },
];

const UserIconGroup = ({ size, groupId, editable }) => {
  const id = Math.floor(Math.random() * 1000) + "-users";
  const [users, setUsers] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const elementRef = useRef();

  const handleClickOutside = (e) => {
    if (isMenuVisible && !elementRef.current.contains(e.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    // TODO: get all group members and group color
    if (groupId) {
      setUsers([{ name: "Laureena" }, { name: "Tim" }]);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", () => {});
    };
  }, [groupId, isMenuVisible]);

  return (
    <div className={styles.Wrap}>
      <ul className={styles.List}>
        {users.map((user, index) => (
          <li className={[styles.Item, styles[size]].join(" ")} key={index}>
            <UserIcon name={user.name} image={user.image} />
          </li>
        ))}
      </ul>

      {editable && availableUsers.length > 0 && (
        <div className={styles.AddWrap} ref={elementRef}>
          <button
            className={styles.Add}
            aria-label="Add user"
            type="button"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            aria-haspopup
            aria-controls={id}
          >
            <Icon className={styles.AddIcon} name="plus" />
          </button>
          <AddUsersMenu
            id={id}
            isVisible={isMenuVisible}
            availableUsers={availableUsers}
          />
        </div>
      )}
    </div>
  );
};

UserIconGroup.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  groupId: PropTypes.number,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
};

export default UserIconGroup;
