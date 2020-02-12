import React from "react";
import PropTypes from "prop-types";

import { Recipe } from "../recipe/recipe";

import styles from "./grid.module.scss";

export const Grid = props => {
  const handleCreateRecipeClick = e => {};

  return (
    <div className={styles.Grid}>
      {props.editable && (
        <Recipe placeholder onClick={handleCreateRecipeClick} />
      )}
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  );
};

Grid.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      groupId: PropTypes.number,
      preparationTime: PropTypes.number
    })
  ),
  editable: PropTypes.bool
};
