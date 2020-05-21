import React from "react";

import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import TooltipElement from "./tooltip.js";

export default {
  component: TooltipElement,
  title: "Interactive Elements",
};

export const Tooltip = () => (
  <span style={{ position: "relative" }}>
    {text("Trigger", "Laureena")}
    <TooltipElement>{text("Tooltip", "You")}</TooltipElement>
  </span>
);
