import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./input.module.scss";

const Input = props => {
  const [value, setValue] = useState(props.value);

  const handleChange = e => {
    setValue(e.target.value);

    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  const customProps = {
    id: props.id,
    placeholder: props.placeholder,
    className: [styles.Input, props.size === "l" ? styles.large : ""].join(" "),
    value,
    onChange: handleChange
  };

  return props.type === "textarea" ? (
    <textarea {...customProps} />
  ) : (
    <input type={props.type} {...customProps} />
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
