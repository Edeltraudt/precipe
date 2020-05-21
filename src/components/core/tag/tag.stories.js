import React from "react";

import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";

import Tag, { TagThemes } from "./tag.js";

export default {
  component: Tag,
  title: "Interactive Elements",
};

export const FilterTag = () => (
  <Tag id="tag" theme={select("Theme", TagThemes)} onChange={action("change")}>
    {text("Text", "Vegetarian")}
  </Tag>
);
