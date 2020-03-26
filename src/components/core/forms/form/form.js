import React, { useState } from "react";
import PropTypes from "prop-types";

import { FormRow } from "./form-row";
import { FormItem } from "./form-item";

import styles from "./form.module.scss";

const Form = ({ method, children, onSubmit }) => {
  const handleSubmit = e => {
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  method: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onSubmit: PropTypes.func
};

export { FormRow, FormItem };
export default Form;
