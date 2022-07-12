import React from 'react';
import Input from '../components/input';
import {
  emailCheckRule,
  maxLengthRule,
  minLengthRule,
  passwordMatchRule,
  requiredRule,
} from './inputValidationRules';

/**
 * ~Creates and returns object representation of form input field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
function createFormFieldConfig(label, name, type, defaultValue = '') {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      // return the JSX code that will
      // render the input component, passing
      // in the required props to Input component
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false,
  };
}

//* Object representation of our signup form
export const signupForm = {
  fullName: {
    ...createFormFieldConfig('Full Name', 'fullName', 'text'),
    validationRules: [
      requiredRule('full name'),
      minLengthRule('full name', 3),
      maxLengthRule('full name', 25),
    ],
  },
  email: {
    ...createFormFieldConfig('Email', 'email', 'email'),
    validationRules: [
      requiredRule('email'),
      minLengthRule('email', 10),
      maxLengthRule('email', 25),
      emailCheckRule(),
    ],
  },
  password: {
    ...createFormFieldConfig('Password', 'password', 'password'),
    validationRules: [
      requiredRule('password'),
      minLengthRule('password', 8),
      maxLengthRule('password', 20),
    ],
  },
  confirmPassword: {
    ...createFormFieldConfig('Confirm Password', 'confirmPassword', 'password'),
    validationRules: [passwordMatchRule()],
  },
};
