import React, { useContext } from "react";
import PropTypes from "prop-types";

import UserContext from "../../../contexts/user-context";

import { UserIcon } from "../../user/icons";
import { Button } from "../../core/forms";

import styles from "./summary.module.scss";

const Summary = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.Summary}>
      <strong className={styles.Name}>{user.name}</strong>
      <div className={styles.Icon}>
        <UserIcon name={user.name} disableTooltip />
      </div>
      <Button className={styles.Link} href="/app/account">
        Account settings
      </Button>
      <form action="/logout" method="POST">
        <Button className={styles.Link} type="submit" theme="plain-link">
          Logout
        </Button>
      </form>
    </div>
  );
};

Summary.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      groupId: PropTypes.number,
      preparationTime: PropTypes.number,
    })
  ),
  editable: PropTypes.bool,
};

export default Summary;
