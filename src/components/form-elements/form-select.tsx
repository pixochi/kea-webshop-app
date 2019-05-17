import React from 'react';
import { WrappedFieldProps, WrappedFieldInputProps } from 'redux-form';

import styled from '../styleguide';

import genericFormElement from './generic-form-element';

export const StyledSelect = styled.select`
  border-radius: 7px;
  padding: 8px;
  outline: none;
  border: 1px solid ${props => props.theme.border.default};
  font-size: 14px;
  width: 100%;
  transition: 0.3s all;
  height: 40px;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.border.focus};
    box-shadow: 0 1px 2px ${props => props.theme.shadow};
  }
`;

type Props = WrappedFieldProps & WrappedFieldInputProps & {
  options: Array<{
    value: string;
    label: string;
  }>,
  defaultValue: any;
  canValidateBeforeTouched: boolean;
};

export const FormSelectBase: React.SFC<Props> = (props) => {

  const {
    value,
    defaultValue,
    ...rest
  } = props;

  const selectedValue = value || defaultValue;

  return (
    <StyledSelect
      {...rest}
      value={selectedValue}
    >
    <option value="">Select an option</option>
    {props.options.map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
    </StyledSelect>
  );
};

export default genericFormElement(FormSelectBase);
