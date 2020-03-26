import React from "react";

import Recipes, { RecipeGrid, RecipeTeaser, RecipeIngredient } from "./../components/recipes";

export default {
  title: "Recipes"
};

export const Teaser = () => <RecipeTeaser />;
export const Grid = () => <RecipeGrid />;
export const Ingredient = () => (
  <Ingredient qty={4} unit="g" name="red beets" />
);
export const Overview = () => <Recipes />;
