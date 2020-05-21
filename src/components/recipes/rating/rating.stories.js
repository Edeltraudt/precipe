import React from "react";

import { action } from "@storybook/addon-actions";

import RatingElement from "./rating.js";

export default {
  component: RatingElement,
  title: "Interactive Elements",
};

export const Rating = () => (
  <RatingElement value={3} onChange={action("Rating Change")} />
);
