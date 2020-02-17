import React from "react";

import Recipes from "./../components/recipes/view/recipes";
import { Recipe } from "./../components/recipes/recipe/recipe";
import { Grid } from "./../components/recipes/grid/grid";

export default {
  title: "Recipes"
};

export const SingleRecipe = () => <Recipe />;
export const RecipeGrid = () => <Grid />;
export const Overview = () => <Recipes />;
