import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./icon-checkbox.module.scss";

const IconCheckbox = ({ id, checked, type, icon, label, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = e => {
    setIsChecked(e.target.checked);

    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={styles.Wrap}>
      <input
        id={id}
        type="checkbox"
        className={styles.Input}
        value={isChecked}
        onChange={handleChange}
      />
      <label className={styles.Label} htmlFor={id}>
        <span className={styles.IconCheckbox} />
        <span className={styles.Text}>{label}</span>
      </label>
    </div>
  );
};

IconCheckbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(["radio", "checkbox"]),
  onChange: PropTypes.func,
  icon: PropTypes.oneOf(["check", "cross"])
};

IconCheckbox.defaultProps = {
  type: "radio",
  icon: "check"
};

export default IconCheckbox;
