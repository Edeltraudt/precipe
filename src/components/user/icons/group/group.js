import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import AddUsersMenu from "./add-users-menu";
import Icon from "./../../../core/icon";
import UserIcon from "./../single-icon/single-icon";

import { userModel } from "./../../../../models/user";

import styles from "./group.module.scss";

const availableUsers = [
  { id: 2, name: "Cordula", mail: "cordula@example.org" },
  { id: 3, name: "Ulrike", mail: "ulrike@example.org" },
  { id: 4, name: "Benny", mail: "benny@example.org" },
  { id: 5, name: "Tanja", mail: "tanja@example.org" },
  { id: 6, name: "Johannes", mail: "johannes@example.org" },
];

const UserIconGroup = ({ size, groups, editable, ...props }) => {
  const id = Math.floor(Math.random() * 1000) + "-users";
  const [members, setMembers] = useState(props.members);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const elementRef = useRef();

  const handleMembersChange = (updatedMembers) => {
    setMembers(
      members.concat(updatedMembers.filter((m) => members.indexOf(m) < 0))
    );
    console.log(updatedMembers, members)
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (elementRef && elementRef.current) {
        if (isMenuVisible && !elementRef.current.contains(e.target)) {
          setIsMenuVisible(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuVisible]);

  return (
    <div className={styles.Wrap}>
      <ul className={styles.List}>
        {/* TODO: get groups that a user belongs to to color-code icons */}
        {/* also remove isGroup then */}
        {members.map((member, index) => (
          <li className={classNames(styles.Item, styles[size])} key={index}>
            <UserIcon
              name={member.name}
              image={member.image}
              groupId={!member.mail ? member.id : null}
              isGroup={Boolean(!member.mail)}
            />
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
            onChange={handleMembersChange}
          />
        </div>
      )}
    </div>
  );
};

UserIconGroup.propTypes = {
  size: PropTypes.oneOf(["s", "l"]),
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  members: PropTypes.arrayOf(userModel),
  editable: PropTypes.bool,
  onChange: PropTypes.func,
};

UserIconGroup.defaultProps = {
  members: [],
  groups: [],
};

export default UserIconGroup;
