import React from "react";

import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import CheckboxElement from "./checkbox.js";

export default {
  component: CheckboxElement,
  title: "Interactive Elements",
};

export const Checkbox = () => (
  <CheckboxElement
    label={text("Label", "Checkbox Label")}
    onChange={value => action("change", value)}
    checked={boolean("Checked", false)}
    id="checkbox"
  />
);
