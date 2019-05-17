import React from 'react';
import { Form as ReduxForm } from 'redux-form';

import Button from '../button';
import { Flex, Base } from '../styleguide/layout';
import { s4 } from '../styleguide/spacing';

export interface FormProps {
  onSubmit: (values: any) => void;
  isDisabled?: boolean;
  submitButtonText?: string;
  cancelButtonText?: string;
  onCancel?: () => void;
  isLoading?: boolean;
  className?: string;
}

type Props = FormProps;

const Form: React.SFC<Props> = (props) => {

  const {
    onSubmit,
    children,
    isDisabled,
    submitButtonText,
    cancelButtonText,
    onCancel,
    isLoading,
    className,
  } = props;

  return (
    <ReduxForm onSubmit={onSubmit} className={className}>
      {children}
      <Flex justify="flex-end">
        {onCancel && (
          <Base marginRight={s4}>
            <Button
              appearance="neutral"
              text={cancelButtonText || 'Cancel'}
              isLoading={isLoading}
              onClick={onCancel}
            />
          </Base>
        )}
        <Button
          text={submitButtonText || 'Submit'}
          type="submit"
          appearance="submit"
          isDisabled={isDisabled}
          isLoading={isLoading}
        />
      </Flex>
    </ReduxForm>
  );
};

export default Form;
