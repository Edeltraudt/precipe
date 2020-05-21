import React from "react";

import { action } from "@storybook/addon-actions";

import RecipeTeaser from "./teaser.js";

export default {
  component: RecipeTeaser,
  title: "Recipe",
};

export const NewRecipe = () => (
  <RecipeTeaser onClick={action("Create New Recipe")} />
);

export const Teaser = () => (
  <RecipeTeaser recipe={{
    title: "Simple Beet Carpaccio",
    time: 20
  }} onClick={action("Visit Recipe")} />
);
