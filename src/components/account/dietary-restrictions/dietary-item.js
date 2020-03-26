import React, { useState } from "react";
import PropTypes from "prop-types";

import * as styles from "./dietary-restrictions.module.scss";

export const DietaryItem = props => {
  const slug = props.label
    .toLowerCase()
    .trim()
    .replace(/\s/g, "-");
  const id = "si-" + slug;

  const [checked, setChecked] = useState(props.checked);

  return (
    <div className={`card -elevated -small ${styles.DietaryItem}`}>
      <input
        id={id}
        type="checkbox"
        className={styles.Checkbox}
        onChange={e => {
          props.onChange(!checked);
          setChecked(!checked);
        }}
        checked={checked}
      />
      <label htmlFor={id} className={`${styles.Label} expand-click-area`}>
        {/* TODO: embed icon */}
        <svg className={styles.Icon}>
          <use xlinkHref={`/assets/diet-sprite.svg#${slug}`}></use>
        </svg>
        {props.label}
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
