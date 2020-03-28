import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./label-value.module.scss";

const LabelValue = ({ label, value, suffix, editable, onChange }) => {
  const [inputValue, setValue] = useState(value);

  return (
    <div className={styles.Wrap}>
      {/*icon && <Icon name={icon} />*/}

      <strong className={styles.Label}>{label}</strong>
      <p className={styles.Value}>
        {inputValue}
        {suffix && <span className={styles.Suffix}>{suffix}</span>}
      </p>
    </div>
  );
};

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  suffix: PropTypes.string,
  editable: PropTypes.bool,
  onChange: PropTypes.func
};

export default LabelValue;
