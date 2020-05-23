import PropTypes from "prop-types";

import { eventModel } from "./event";

export const dayModel = PropTypes.shape({
  date: PropTypes.instanceOf(Date),
  events: PropTypes.arrayOf(eventModel),
});
