import React from "react";

import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";

import IconCheckboxElement from "./icon-checkbox.js";

export default {
  component: IconCheckboxElement,
  title: "Interactive Elements",
};

export const IconCheckbox = () => (
  <IconCheckboxElement
    id="icon-checkbox"
    onChange={action("change")}
    type={select("Type", ["radio", "checkbox"])}
    label={text("Label", "Label")}
  />
);
