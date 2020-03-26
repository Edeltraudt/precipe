import React from "react";
import PropTypes from "prop-types";

import RecipeTeaser from "../teaser";

import styles from "./grid.module.scss";

const Grid = ({ recipes, editable }) => {
  const handleCreateRecipeClick = e => {};
  const handleRecipeClick = e => {};

  return (
    <div className={styles.Grid}>
      {editable && (
        <RecipeTeaser placeholder onClick={handleCreateRecipeClick} />
      )}

      {recipes.map(recipe => (
        <RecipeTeaser
          recipe={recipe}
          onClick={handleRecipeClick}
          key={`recipe-${recipe.id}`}
        />
      ))}
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
