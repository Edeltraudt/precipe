import React from "react";

import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";

import Input from "./input.js";

export default {
  component: Input,
  title: "Form Elements",
};

export const InputField = () => (
  <Input
    id="input"
    placeholder={text("Placeholder", "jane.doe@example.com")}
    name={text("Name", "email")}
    onChange={action("change")}
    type={select("Type", ["text", "password", "email", "number", "textarea"], "email")}
    size={select("Size", ["s", "l"], "s")}
  />
);
