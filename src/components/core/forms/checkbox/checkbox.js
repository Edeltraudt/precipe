import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./checkbox.module.scss";

const Checkbox = props => {
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
        <span className={styles.Checkbox} />
        <span className={styles.Text}>{props.label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default Checkbox;
