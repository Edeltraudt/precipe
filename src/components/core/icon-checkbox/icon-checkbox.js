import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./icon-checkbox.module.scss";

const IconCheckbox = props => {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleChange = e => {
    setIsChecked(e.target.checked);

    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return (
    <div className={styles.Wrap}>
      <input
        id={props.id}
        type="checkbox"
        className={styles.Input}
        value={isChecked}
        onChange={handleChange}
      />
      <label className={styles.Label} htmlFor={props.id}>
        <span className={styles.IconCheckbox} />
        <span className={styles.Text}>{props.label}</span>
      </label>
    </div>
  );
};

IconCheckbox.propTypes = {
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
