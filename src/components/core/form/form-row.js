import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "./../../core/button/button";

import styles from "./form.module.scss";

export const FormRow = props => {
  const cls = [
    styles.Row,
    props.children.length ? styles.limited : "",
    props.className ? props.className : ""
  ].join(" ");

  return (
    <div className={cls} style={{ "--count": props.children.length }}>
      {props.children}
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
