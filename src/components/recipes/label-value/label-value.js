import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./rating.module.scss";

import Icon from "../../core/icon";

const Rating = ({ value, label, suffix, editable, onChange }) => {
  const [ratingValue, setRatingValue] = useState(value);

  const handleClick = rating => {
    setRatingValue(rating);

    if (onChange) {
      onChange(rating);
    }
  };

  return (
    <div className={styles.Wrap} aria-label="How do you like this recipe?">
      {ratings.map(rating => (
        <button
          key={rating.value}
          className={[
            styles.Item,
            ratingValue && ratingValue === rating.value ? styles.checked : ""
          ].join(" ")}
          aria-label={rating.label}
          onClick={e => handleClick(rating.value)}
        >
          <Icon name="heart" className={styles.Icon} />
        </button>
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func
};

export default Rating;
