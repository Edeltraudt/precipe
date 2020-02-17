import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./label-value.module.scss";

export const LabelValue = props => {
  const [value, setValue] = useState(false);

  return (
    <div className={styles.Wrap}>
      {/*props.icon && <Icon name={props.icon} />*/}

      <strong className={styles.Label}>{props.label}</strong>
      <p className={styles.Value}>
        {props.value}
        {props.suffix && <span className={styles.Suffix}>{props.suffix}</span>}
      </p>
    </div>
  );
};

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  suffix: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func
};
