import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./tag.module.scss";

const Tag = ({ id, children, checked, style, onChange }) => {
  const [value, setValue] = useState(checked);

  return (
    <div className={`${styles.Wrap} ${styles[style]}`}>
      <input
        type="checkbox"
        id={id}
        className={styles.Input}
        onChange={e => {
          onChange(!value);
          setValue(!value);
        }}
        checked={value}
      />
      <label htmlFor={id} className={styles.Tag}>
        {children}
      </label>
    </div>
  );
};

Tag.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  style: PropTypes.oneOf(["negative"])
};

Tag.defaultProps = {
  checked: false
};

export default Tag;
