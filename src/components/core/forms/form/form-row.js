import React from "react";
import PropTypes from "prop-types";

import styles from "./form.module.scss";

const FormRow = ({ children, className }) => {
  const cls = [
    styles.Row,
    children.length ? styles.limited : "",
    className ? className : ""
  ].join(" ");

  return (
    <div className={cls} style={{ "--count": children.length }}>
      {children}
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

export default FormRow;
