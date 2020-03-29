import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "./../../../core/icon";
import { Input, InputWithIcon } from "./../../../core/forms";
import { UserIcon } from "./../single-icon/single-icon";

import styles from "./group.module.scss";

const availableUsers = [
  { id: 2, name: "Cordula" },
  { id: 3, name: "Ulrike" },
  { id: 4, name: "Benny" },
  { id: 5, name: "Tanja" },
  { id: 6, name: "Johannes" }
];

const AddUsersMenu = ({ isVisible }) => {
  const id = Math.floor(Math.random() * 1000) + "-users";
  const [searchInput, setSearchInput] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([
    { id: 2, name: "Cordula" }
  ]);

  const handleClick = (user, isSelected) => {
    if (isSelected) {
      setSelectedUsers(selectedUsers =>
        selectedUsers.filter(u => u.id !== user.id)
      );
    } else {
      setSelectedUsers(selectedUsers => [...selectedUsers, user]);
    }
  };

  return (
    <div className={`${styles.Menu} ${isVisible ? styles.isVisible : ""}`}>
      <strong className={styles.MenuLabel}>Add users or groups</strong>
      <ul className={styles.MenuList}>
        {availableUsers.map(user => {
          const isSelected = Boolean(selectedUsers.find(u => u.id === user.id));
          return (
            <li className={styles.MenuItem} key={user.id}>
              <button
                className={`${styles.UserButton} ${
                  isSelected ? styles.isSelected : ""
                }`}
                onClick={() => handleClick(user, isSelected)}
                type="button"
              >
                <UserIcon name={user.name} />
              </button>
            </li>
          );
        })}
      </ul>

      <div className={styles.MenuInput}>
        <InputWithIcon icon="search">
          <Input
            id={id}
            type="text"
            placeholder="Search for a user..."
            onChange={setSearchInput}
            value={searchInput}
          />
        </InputWithIcon>
      </div>
      {/* <Select options={options} autosize /> */}
    </div>
  );
};

export const UserIconGroup = ({ size, groupId, editable }) => {
  const [users, setUsers] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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
            <UserIcon name={user.name} image={user.image} />
          </li>
        ))}
      </ul>

      {editable && (
        <div className={styles.AddWrap}>
          <button
            className={styles.Add}
            aria-label="Add user"
            type="button"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <Icon className={styles.AddIcon} name="plus" />
          </button>
          <AddUsersMenu isVisible={isMenuVisible} />
        </div>
      )}
    </div>
  );
};

UserIconGroup.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  groupId: PropTypes.number,
  editable: PropTypes.bool
};
