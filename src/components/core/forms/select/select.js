import React, { useState } from "react";
import PropTypes from "prop-types";

import { Select, Option } from "react-a11y-select";

import Icon from "../../icon/icon";

import * as styles from "./select.module.scss";

const SelectBox = ({
  options,
  className,
  label,
  defaultValue,
  onChange,
  style
}) => {
  return (
    <div className={`${styles.Wrap} ${className} ${styles[style]}`}>
      <Select label={label} initialValue={defaultValue} onChange={onChange}>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <Icon className={styles.Icon} name="angle-down" />
    </div>
  );
};

SelectBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.oneOf(["default", "invisible"])
};

SelectBox.defaultProps = {
  style: "default"
};

export default SelectBox;
