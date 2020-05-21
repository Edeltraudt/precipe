import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./checkbox.module.scss";

const Checkbox = ({ id, checked, label, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = e => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
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
        <span className={styles.Checkbox} />
        <span className={styles.Text}>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
