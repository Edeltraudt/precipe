import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "./../icon";

import styles from "./tag.module.scss";

const TagThemes = ["default", "negative"];

const Tag = ({ id, children, checked, theme, onChange }) => {
  const [value, setValue] = useState(checked);
  const isNegative = theme === "negative";

  return (
    <div className={`${styles.Wrap} ${styles[theme]}`}>
      <input
        type="checkbox"
        id={id}
        className={styles.Input}
        onChange={(e) => {
          onChange(!value);
          setValue(!value);
        }}
        checked={value}
      />
      <label htmlFor={id} className={styles.Tag}>
        {children}
        {isNegative && <Icon name="close" className={styles.Icon} />}
      </label>
    </div>
  );
};

Tag.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  theme: PropTypes.oneOf(TagThemes),
};

Tag.defaultProps = {
  checked: false,
  theme: "default",
};

export default Tag;
export { TagThemes };
