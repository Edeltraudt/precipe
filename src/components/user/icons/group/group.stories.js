import React from "react";

import { action } from "@storybook/addon-actions";
import { number, text, boolean, select } from "@storybook/addon-knobs";

import UserIconGroup from "./group.js";

export default {
  component: UserIconGroup,
  title: "User Account",
};

export const MemberList = () => (
  <UserIconGroup
    groupId={1}
    size={select("Size", ["s", "l"])}
    editable={boolean("Editable", true)}
    onChange={action("Change Users")}
  />
);

// TODO: User Image
// TODO: Context
