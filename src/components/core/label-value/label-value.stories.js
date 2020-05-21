import React from "react";

import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import LabelValueElement from "./label-value.js";

export default {
  component: LabelValueElement,
  title: "Interactive Elements",
};

export const LabelValue = () => (
  <LabelValueElement
    label={text("Label", "Preparation Time")}
    value={text("Value", "20")}
    suffix={text("Suffix", "min")}
    editable={boolean("Editable", false)}
    onChange={action("change")}
  />
);
