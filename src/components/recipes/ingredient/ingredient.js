import React from "react";
import PropTypes from "prop-types";

import styles from "./ingredient.module.scss";

const Ingredient = ({ qty, unit, name }) => {
  const handleCreateRecipeClick = e => {};

  return (
    <p className={styles.Wrap}>
      <span className={styles.Amount}>
        {qty && qty}
        {unit && unit}
        {!qty && !unit && <>&nbsp;</>}
      </span>
      <strong className={styles.Name}>{name}</strong>
    </p>
  );
};

Ingredient.propTypes = {
  qty: PropTypes.number,
  unit: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Ingredient;
