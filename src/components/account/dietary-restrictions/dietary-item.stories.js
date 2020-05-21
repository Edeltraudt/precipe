import React from "react";

import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";

import DietaryItem from "./dietary-item.js";

export default {
  component: DietaryItem,
  title: "Dietary Restrictions",
};

export const Option = () => (
  <DietaryItem
    label={select("Restriction", [
      "Lactose",
      "Beef",
      "Eggs",
      "Pork",
      "Poultry",
      "Fish",
      "Sugar",
      "Wheat",
    ], "Lactose")}
    onChange={action("change")}
  />
);
