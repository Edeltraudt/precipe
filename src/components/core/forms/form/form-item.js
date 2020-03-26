import React from "react";
import PropTypes from "prop-types";

import styles from "./form.module.scss";

export const FormItem = ({ children, label, info }) => {
  const id = children && typeof children !== "string" ? children.id : null;

  return (
    <div className={styles.Item}>
      {children}
      {label && (
        <label className={styles.Label} htmlFor={id}>
          {label}
        </label>
      )}
      {info && <p className={styles.Info}>{info}</p>}
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
