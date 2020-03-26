import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./input.module.scss";

export const InputWithIcon = ({ children, icon }) => (
  <div className={styles.Wrap}>
    <div className={styles.Icon}>{icon}</div>
    {children}
  </div>
);

const Input = ({ value, id, type, placeholder, onChange, size }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = e => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e.target.value);
    }
  };

  const props = {
    id: id,
    placeholder: placeholder,
    className: [styles.Input, size === "l" ? styles.large : ""].join(" "),
    value: inputValue,
    onChange: handleChange
  };

  return type === "textarea" ? (
    <textarea {...props} />
  ) : (
    <input type={type} {...props} />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["s", "l"]).isRequired,
  value: PropTypes.any
};

Input.defaultProps = {
  size: "s"
};

export default Input;
