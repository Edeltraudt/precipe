import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "../../icon";

import styles from "./input.module.scss";

export const InputWithIcon = ({ children, icon }) => (
  <div className={styles.Wrap}>
    <Icon name={icon} className={styles.Icon} />
    {children}
  </div>
);

const Input = ({ value, id, type, placeholder, onChange, name, size }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = e => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e.target.value);
    }
  };

  const props = {
    id,
    placeholder,
    className: [styles.Input, size === "l" ? styles.large : ""].join(" "),
    value: inputValue,
    name,
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
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["s", "l"]).isRequired,
  value: PropTypes.any
};

Input.defaultProps = {
  size: "s"
};

export default Input;
