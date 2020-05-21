import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "../icon/icon";

import styles from "./icon-checkbox.module.scss";

const IconCheckbox = ({ id, checked, type, icon, label, onChange, name }) => {
  const [isChecked, setIsChecked] = useState(checked);

  if (!name) {
    name = id;
  }

  const handleChange = (e) => {
    setIsChecked(e.target.checked);

    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={`${styles.Wrap} ${styles[icon]}`}>
      <input
        id={id}
        type={type}
        className={styles.Input}
        value={isChecked}
        onChange={handleChange}
        name={name}
      />
      <label className={styles.Label} htmlFor={id}>
        <span className={styles.IconCheckbox}>
          <Icon name={icon} className={styles.Icon} />
        </span>
        <span className={styles.Text}>{label}</span>
      </label>
    </div>
  );
};

IconCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(["radio", "checkbox"]),
  onChange: PropTypes.func,
  icon: PropTypes.oneOf(["checkmark", "close"]),
};

IconCheckbox.defaultProps = {
  type: "radio",
  icon: "checkmark",
};

export default IconCheckbox;
