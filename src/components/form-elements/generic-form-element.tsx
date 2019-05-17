import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import styled, { css } from '../styleguide';
import { s2 } from '../styleguide/spacing';

import {Body} from '../styleguide/text';

const IssueMessage = styled(Body)`
  color: ${props => props.theme.error};
`;

const WrappedComponentContainer = styled((props) => (
  <div className={props.className}>
    {props.children}
  </div>
))`
  & input, & select, & textarea {
    ${props => props.inputHasError && css`
      border-color: ${props => props.theme.error};
    `}
  }
`;

interface OuterProps {
  canValidateBeforeTouched?: boolean;
  [x: string]: any;
}

const genericFormElement = (WrappedComponent: React.ComponentType<OuterProps> | any) =>
  class extends React.Component<WrappedFieldProps & OuterProps> {
    public render() {
      const {
        canValidateBeforeTouched,
        input,
        meta: { touched, error, warning },
        ...rest
      } = this.props;

      let issueMessageText: string | undefined;
      issueMessageText = warning && warning;
      issueMessageText = error && error;

      const shouldValidate = canValidateBeforeTouched || touched;
      const shouldShowIssueMessage = shouldValidate && issueMessageText;

      return (
        <WrappedComponentContainer inputHasError={shouldShowIssueMessage}>
          <WrappedComponent
            {...input}
            {...rest}
          />
          {shouldShowIssueMessage && <IssueMessage paddingLeft={s2} marginTop={s2}>{issueMessageText}</IssueMessage>}
        </WrappedComponentContainer>
      );
    }
};

export default genericFormElement;
