import React, { useState } from "react";
import PropTypes from "prop-types";

import * as styles from "./dietary-restrictions.module.scss";

export const DietaryItem = ({ label, checked, onChange }) => {
  const slug = label
    .toLowerCase()
    .trim()
    .replace(/\s/g, "-");
  const id = "si-" + slug;

  const [checked, setChecked] = useState(checked);

  return (
    <div className={`card -elevated -small ${styles.DietaryItem}`}>
      <input
        id={id}
        type="checkbox"
        className={styles.Checkbox}
        onChange={e => {
          onChange(!checked);
          setChecked(!checked);
        }}
        checked={checked}
      />
      <label htmlFor={id} className={`${styles.Label} expand-click-area`}>
        {/* TODO: embed icon */}
        <svg className={styles.Icon}>
          <use xlinkHref={`/assets/diet-sprite.svg#${slug}`}></use>
        </svg>
        {label}
      </label>
    </div>
  );
};

DietaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
};

DietaryItem.defaultProps = {
  checked: false
};
