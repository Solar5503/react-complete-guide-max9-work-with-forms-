import React from 'react';
import styles from './input.module.css';

function InputField({
  label,
  type,
  name,
  handleChange,
  errorMessage,
  isValid,
  value,
}) {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <small className={styles.error}>{errorMessage}</small>
      )}
    </div>
  );
}

export default React.memo(InputField);
