import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Theme } from './styleguide/theme';
import styled, { css } from './styleguide';
import { s0 } from './styleguide/spacing';

import Spinner from './spinner';
import {Body} from './styleguide/text';
import { LocationDescriptor } from 'history';

type ButtonSize = 'big' | 'mini' | 'default';

export const getBackgroundColor = (theme: Theme, appearance?: keyof typeof IButtonAppearance): string => {
  switch (appearance) {
    case 'submit':
      return theme.submit;
    case 'info':
      return theme.info;
    case 'neutral':
      return theme.textDisabled;
    case 'warning':
      return theme.errorDark;
    default:
      return 'transparent';
  }
};

export const getTextColor = (theme: Theme, appearance?: keyof typeof IButtonAppearance): string => {
  switch (appearance) {
    case 'submit':
    case 'info':
    case 'neutral':
    case 'warning':
      return theme.invertedText;
    default:
      return theme.text;
  }
};

export const Paddings = {
  mini: '8px 12px',
  big: '16px 20px',
  default: '12px 16px',
};

export const getPadding = (buttonSize?: ButtonSize): string => {
  switch (buttonSize) {
    case 'mini':
      return Paddings.mini;
    case 'big':
      return Paddings.big;
    case 'default':
    default:
      return Paddings.default;
  }
};

export const FontSizes = {
  mini: '14px',
  big: '20px',
  default: '16px',
};

export const getFontSize = (buttonSize?: ButtonSize): string => {
  switch (buttonSize) {
    case 'mini':
      return FontSizes.mini;
    case 'big':
      return FontSizes.big;
    case 'default':
    default:
      return FontSizes.default;
  }
};

export const SpinnerPositions = {
  mini: 'left: 43%; top: 20%;',
  default: 'left: 39%; top: 27%;',
};

export const getSpinnerPosition = (buttonSize?: ButtonSize): string => {
  switch (buttonSize) {
    case 'mini':
      return SpinnerPositions.mini;
    case 'default':
    default:
    return SpinnerPositions.default;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.disabled ?
    props.theme.inactive :
    getBackgroundColor(props.theme, props.appearance)
  };
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: ${props => getPadding(props.buttonSize)};
  border-radius: 7px;
  border: none;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: all .2s;
  box-shadow: 0 2px 2px ${props => props.theme.shadow};
  display: block;
  position: relative;

  ${props => props.alignWith && css`
    ${props => {
      switch ((props as any).alignWith) {
        case 'left': return 'margin-right: auto';
        case 'right': return 'margin-left: auto';
        case 'center': return 'margin: 0 auto';
        default: return 'auto';
      }
    }}
  `}

  &:hover {
    filter: brightness(98%);
  }

  &:active {
    box-shadow: none;
    filter: brightness(96%);
    transform: scale(0.99);
  }

  & > * {
    opacity: ${props => props.isLoading ? 0 : 1};
  }

  & > ${Body} {
    color: ${props => getTextColor(props.theme, props.appearance)};
    font-size:${props => getFontSize(props.buttonSize)};
    margin-bottom: 0;
  }
`;

export const StyledSpinner: any = styled(Spinner).attrs<ButtonProps>({
  color: (props: any) => props.theme.invertedText,
})`
  opacity: 1 !important;
  position: absolute;
  z-index: 2;
  ${props => getSpinnerPosition((props as any).buttonSize)};
`;

enum IButtonAppearance {
  submit = 'submit',
  warning = 'warning',
  info = 'info',
  neutral = 'neutral',
}

export interface ButtonProps {
  text?: string;
  appearance?: keyof typeof IButtonAppearance;
  fullWidth?: boolean;
  isLoading?: boolean;
  alignWith?: 'left' | 'right' | 'center';
  buttonSize?: ButtonSize;
  linkTo?: LocationDescriptor;
  isDisabled?: boolean;
}

type Props = ButtonProps & Partial<ButtonHTMLAttributes<any>>;

const Button: React.SFC<any> = (props) => {

  const {
    isLoading,
    linkTo,
    children,
    isDisabled,
  } = props;

  let Wrapper;
  let wrapperProps;

  if (linkTo) {
    Wrapper = Link;
    wrapperProps = {
      to: String(linkTo),
      onClick: isDisabled ? (e: Event) => e.preventDefault() : props.onClick,
    };
  }
  else {
    Wrapper = React.Fragment;
    wrapperProps = {} as any;
  }


  const InnerChild = children ? children : (
    <Body marginBottom={s0}>{props.text}</Body>
  );

  return (
    <Wrapper {...wrapperProps}>
      <StyledButton {...props} disabled={isLoading || isDisabled}>
        {InnerChild}
        {isLoading && <StyledSpinner buttonSize={props.buttonSize} />}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
