import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./rating.module.scss";

import Icon from "../../core/icon";

const ratings = [
  {
    value: 4,
    label: "I love it"
  },
  {
    value: 3,
    label: "Sure let's go"
  },
  {
    value: 2,
    label: "It's okay"
  },
  {
    value: 1,
    label: "Only if I absolutely have to"
  }
];

const Rating = ({ value, onChange }) => {
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
  value: PropTypes.number,
  onChange: PropTypes.func
};

export default Rating;
