import PropTypes from "prop-types";

export const eventModel = PropTypes.shape({
  id: PropTypes.number,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  groupId: PropTypes.number
});
