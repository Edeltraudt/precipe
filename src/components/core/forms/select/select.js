import React from "react";
import PropTypes from "prop-types";

import { Select, Option } from "react-a11y-select";

import Icon from "../../icon/icon";

import * as styles from "./select.module.scss";

const SelectBoxThemes = ["default", "invisible"];

const SelectBox = ({
  options,
  className,
  label,
  defaultValue,
  onChange,
  theme,
}) => (
  <div className={`${styles.Wrap} ${className} ${styles[theme]}`}>
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

SelectBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(SelectBoxThemes),
};

SelectBox.defaultProps = {
  theme: "default",
};

export default SelectBox;
export { SelectBoxThemes };
