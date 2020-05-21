import React from "react";

import { number } from "@storybook/addon-knobs";

import Icon from "./icon.js";

export default {
  component: Icon,
  title: "Icons",
};

export const ArrowLeftIcon = () => (
  <Icon name="arrow-left" size={number("Icon size (px)", 32)} />
);
export const AngleDownIcon = () => (
  <Icon name="angle-down" size={number("Icon size (px)", 32)} />
);
export const EditIcon = () => (
  <Icon name="edit" size={number("Icon size (px)", 32)} />
);
export const SortIcon = () => (
  <Icon name="sort" size={number("Icon size (px)", 32)} />
);
export const CheckmarkIcon = () => (
  <Icon name="checkmark" size={number("Icon size (px)", 32)} />
);
export const CloseIcon = () => (
  <Icon name="close" size={number("Icon size (px)", 32)} />
);
export const HeartIcon = () => (
  <Icon name="heart" size={number("Icon size (px)", 32)} />
);
export const ImageIcon = () => (
  <Icon name="image" size={number("Icon size (px)", 32)} />
);
export const MinusIcon = () => (
  <Icon name="minus" size={number("Icon size (px)", 32)} />
);
export const PlusIcon = () => (
  <Icon name="plus" size={number("Icon size (px)", 32)} />
);
export const SearchIcon = () => (
  <Icon name="search" size={number("Icon size (px)", 32)} />
);
export const ServingsIcon = () => (
  <Icon name="servings" size={number("Icon size (px)", 32)} />
);
export const TimeIcon = () => (
  <Icon name="time" size={number("Icon size (px)", 32)} />
);
export const DietLactoseIcon = () => (
  <Icon name="diet-lactose" size={number("Icon size (px)", 32)} />
);
export const DietBeefIcon = () => (
  <Icon name="diet-beef" size={number("Icon size (px)", 32)} />
);
export const DietEggsIcon = () => (
  <Icon name="diet-eggs" size={number("Icon size (px)", 32)} />
);
export const DietPorkIcon = () => (
  <Icon name="diet-pork" size={number("Icon size (px)", 32)} />
);
export const DietPoultryIcon = () => (
  <Icon name="diet-poultry" size={number("Icon size (px)", 32)} />
);
export const DietFishIcon = () => (
  <Icon name="diet-fish" size={number("Icon size (px)", 32)} />
);
export const DietSugarIcon = () => (
  <Icon name="diet-sugar" size={number("Icon size (px)", 32)} />
);
export const DietWheatIcon = () => (
  <Icon name="diet-wheat" size={number("Icon size (px)", 32)} />
);
