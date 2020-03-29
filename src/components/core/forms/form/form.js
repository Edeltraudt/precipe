import React from "react";
import PropTypes from "prop-types";

import { FormRow } from "./form-row";
import { FormItem } from "./form-item";

import styles from "./form.module.scss";

const Form = ({ className, method, children, onSubmit }) => {
  const handleSubmit = e => {
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form className={`${styles.Form} ${className}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  method: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onSubmit: PropTypes.func
};

export { FormRow, FormItem };
export default Form;
