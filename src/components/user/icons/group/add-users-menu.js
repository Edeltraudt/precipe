import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input, InputWithIcon } from "./../../../core/forms";
import { UserIcon } from "./../single-icon/single-icon";

import styles from "./group.module.scss";

const AddUsersMenu = ({ isVisible, id, availableUsers }) => {
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
    <div
      className={`${styles.Menu} ${isVisible ? styles.isVisible : ""}`}
      aria-hidden={!isVisible}
    >
      <strong className={styles.MenuLabel}>Add users or groups</strong>
      <ul className={styles.MenuList}>
        {availableUsers.map(user => {
          const isSelected = Boolean(selectedUsers.find(u => u.id === user.id));
          const cls = isSelected ? styles.isSelected : "";

          return (
            <li className={styles.MenuItem} key={user.id}>
              <button
                className={`${styles.UserButton} ${cls}`}
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
    </div>
  );
};

AddUsersMenu.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string.isRequired,
  availableUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export default AddUsersMenu;
