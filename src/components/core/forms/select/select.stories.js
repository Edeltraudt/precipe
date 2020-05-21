import React from "react";

import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";

import Select, { SelectBoxThemes } from "./select.js";

export default {
  component: Select,
  title: "Interactive Elements",
};

export const SelectBox = () => (
  <Select
    id="select"
    onChange={action("change")}
    label={text("Label", "Select")}
    theme={select("Theme", SelectBoxThemes)}
    options={[
      { value: "a", label: "Option A" },
      { value: "b", label: "Option B" },
    ]}
  />
);
