import React from "react";

import { text, select } from "@storybook/addon-knobs";

import MessageElement from "./message.js";

export default {
  component: MessageElement,
  title: "Typography",
};

export const Message = () => (
  <MessageElement size={select("Size", ["s", "default"])}>
    {text("Message", "Message Text")}
  </MessageElement>
);
