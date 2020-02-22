import React from "react";
import PropTypes from "prop-types";

import styles from "./ingredient.module.scss";

const Ingredient = props => {
  const handleCreateRecipeClick = e => {};

  return (
    <p className={styles.Wrap}>
      <span className={styles.Amount}>
        {props.qty && props.qty}
        {props.unit && props.unit}
      </span>
      <strong className={styles.Name}>{props.name}</strong>
    </p>
  );
};

Ingredient.propTypes = {
  qty: PropTypes.number,
  unit: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Ingredient;