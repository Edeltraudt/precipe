import React from "react";
import PropTypes from "prop-types";

import FormRow from "./form-row";
import FormItem from "./form-item";

import styles from "./form.module.scss";

const Form = ({ className, method, children, onSubmit, action }) => {
  const handleSubmit = (e) => {
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      className={`${styles.Form} ${className}`}
      onSubmit={handleSubmit}
      method={method}
      action={action}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  method: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func,
};

export { FormRow, FormItem };
export default Form;
