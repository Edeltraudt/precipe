import React from "react";

import { text, select } from "@storybook/addon-knobs";

import HeadlineElement from "./headline.js";

export default {
  component: HeadlineElement,
  title: "Typography",
};

export const Headline = () => (
  <HeadlineElement level={select("Level", [1, 2, 3, 4, 5, 6])}>
    {text("Headline", "Account Settings")}
  </HeadlineElement>
);
