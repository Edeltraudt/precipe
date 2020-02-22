import React from "react";

import Recipes, { RecipeGrid, RecipeTeaser, RecipeIngredient } from "./../components/recipes";

export default {
  title: "Recipes"
};

export const SingleRecipe = () => <Recipe />;
export const RecipeGrid = () => <Grid />;
export const RecipeIngredient = () => (
  <Ingredient qty={4} unit="g" name="red beets" />
);
export const Overview = () => <Recipes />;
