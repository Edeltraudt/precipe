import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./configs/context"; // we will define the contextual setups later in API section

import "../src/assets/scss/styles.scss";

addDecorator(withContexts(contexts));
