import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "./../../core/button/button";
import { FormRow } from "./form-row";
import { FormItem } from "./form-item";

import styles from "./form.module.scss";

const Form = props => {
  const handleSubmit = e => {
    if (props.onSubmit) {
      props.onSubmit(e);
    }
  }

  return <form className={styles.Form} onSubmit={handleSubmit}>{props.children}</form>;
};

Form.propTypes = {
  method: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onSubmit: PropTypes.func
};

export default Form;
export { FormRow, FormItem };
