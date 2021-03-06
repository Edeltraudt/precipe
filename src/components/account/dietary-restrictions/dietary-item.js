import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "./../../core";

import * as styles from "./dietary-restrictions.module.scss";

const DietaryItem = ({ label, checked, onChange }) => {
  const slug = label
    ? label
        .toLowerCase()
        .trim()
        .replace(/\s/g, "-")
    : "";
  const id = "si-" + slug;

  const [checkedValue, setCheckedValue] = useState(checked);

  return label ? (
    <div className={`card -elevated -small ${styles.DietaryItem}`}>
      <input
        id={id}
        type="checkbox"
        className={styles.Checkbox}
        onChange={(e) => {
          onChange(!checkedValue);
          setCheckedValue(!checkedValue);
        }}
        checked={checkedValue}
      />
      <label htmlFor={id} className={`${styles.Label} expand-click-area`}>
        <Icon name={`diet-${slug}`} className={styles.Icon} />
        {label}
      </label>
    </div>
  ) : null;
};

DietaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

DietaryItem.defaultProps = {
  checked: false,
};

export default DietaryItem;
