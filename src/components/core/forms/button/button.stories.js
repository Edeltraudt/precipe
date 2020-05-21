import React from "react";

import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";

import ButtonElement, { ButtonThemes } from "./button.js";

export default {
  component: ButtonElement,
  title: "Interactive Elements",
};

export const Button = () => (
  <ButtonElement
    onClick={action("clicked")}
    theme={select("Theme", ButtonThemes, ButtonThemes[0])}
  >
    {text("Text", "Button")}
  </ButtonElement>
);
