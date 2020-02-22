import React from "react";
import PropTypes from "prop-types";

import RecipeTeaser from "../teaser";

import styles from "./grid.module.scss";

const Grid = props => {
  const handleCreateRecipeClick = e => {};

  return (
    <div className={styles.Grid}>
      {props.editable && (
        <RecipeTeaser placeholder onClick={handleCreateRecipeClick} />
      )}
      <RecipeTeaser />
      <RecipeTeaser />
      <RecipeTeaser />
      <RecipeTeaser />
      <RecipeTeaser />
      <RecipeTeaser />
      <RecipeTeaser />
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

export default Grid;
