import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./tag.module.scss";

export const Tag = props => {
  const [value, setValue] = useState(false);

  return (
    <div className={styles.Wrap}>
      <input
        type="checkbox"
        id={props.id}
        className={styles.Input}
        onChange={e => setValue(e.target.checked)}
        checked={value}
      />
      <label htmlFor={props.id} className={styles.Tag}>
        {props.children}
      </label>
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  onChange: PropTypes.func
};
