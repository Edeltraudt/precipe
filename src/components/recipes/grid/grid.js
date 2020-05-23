import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import RecipeTeaser from "../teaser";
import { slugify } from "./../../../utility/helpers";

import styles from "./grid.module.scss";

const Grid = ({ recipes, editable }) => {
  const [toRecipe, setToRecipe] = useState(null);

  const handleCreateRecipeClick = (e) => {};

  return (
    <>
      {toRecipe && <Redirect to={`/app/recipe/${toRecipe}`} />}

      <div className={styles.Grid}>
        {editable && (
          <RecipeTeaser placeholder onClick={handleCreateRecipeClick} />
        )}

        {recipes.map((recipe) => (
          <RecipeTeaser
            recipe={recipe}
            onClick={(e) =>
              setToRecipe(recipe.id + "/" + slugify(recipe.title))
            }
            key={`recipe-${recipe.id}`}
          />
        ))}
      </div>
    </>
  );
};

Grid.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      groupId: PropTypes.number,
      preparationTime: PropTypes.number,
    })
  ),
  editable: PropTypes.bool,
};

export default Grid;
