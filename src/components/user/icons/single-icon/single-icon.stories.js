import React from "react";

import { action } from "@storybook/addon-actions";
import { number, text, boolean } from "@storybook/addon-knobs";

import UserIcon from "./single-icon.js";

export default {
  component: UserIcon,
  title: "User Account",
};

export const AvatarWithoutImage = () => (
  <UserIcon
    name={text("Name", "Laureena")}
    disableTooltip={boolean("Disable Tooltip", false)}
  />
);

// TODO: User Image
// TODO: Context
