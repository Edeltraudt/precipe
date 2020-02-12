import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "./../../core/button/button";

import styles from "./form.module.scss";

export const FormItem = props => {
  const id =
    props.children && typeof props.children !== "string"
      ? props.children.props.id
      : null;

  return (
    <div className={styles.Item}>
      {props.children}
      {props.label && (
        <label className={styles.Label} htmlFor={id}>
          {props.label}
        </label>
      )}
      {props.info && <p className={styles.Info}>{props.info}</p>}
    </div>
  );
};

FormItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  label: PropTypes.string,
  info: PropTypes.string
};
