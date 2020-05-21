const path = require("path");

module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  styles: ["../src/assets/scss/styles.scss"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-contexts/register",
  ],
};
