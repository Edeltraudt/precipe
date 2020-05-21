import React from "react";

import { number, text } from "@storybook/addon-knobs";

import IngredientElement from "./ingredient.js";

export default {
  component: IngredientElement,
  title: "Recipe",
};

export const Ingredient = () => (
  <IngredientElement
    qty={number("Quantity", 20, { min: 0 })}
    unit={text("Unit", "ml")}
    name={text("Ingredient", "Sunflower Seed Oil")}
  />
);
