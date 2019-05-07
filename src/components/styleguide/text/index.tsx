import { DOMAttributes } from 'react';

import styled, { css } from '../index';
import {Base as BaseLayout, IBaseLayoutProps} from '../layout';

interface IBaseTextProps {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  inverted?: boolean;
  emphasized?: boolean;
  disabled?: boolean;
  inline?: boolean;
  as?: string;
  break?: boolean;
  isLink?: boolean;
  noMargin?: boolean;
}

export type BaseProps = IBaseTextProps & IBaseLayoutProps & DOMAttributes<any>;

const BaseText = styled(BaseLayout)<BaseProps>`
  text-align: ${props => props.textAlign};
  color: ${props => {
    if (props.isLink) {
      return props.theme.primary;
    }
    return props.inverted ? props.theme.invertedText : props.theme.text;
  }};
  font-weight: ${props => props.emphasized ? 600 : 400};
  opacity: ${props => props.disabled ? 0.7 : 1};
  word-break: ${props => props.break ? 'break-word' : 'unset'};

  ${props => props.noMargin && css`
    margin: 0 !important;
  `}

  ${props => props.inline && css`
    display: inline;
  `}
`;

export const Headline = styled(BaseText).attrs({
  as: 'h1',
})`
  font-size: 40px;
`;

export const SubHeadline = styled(BaseText).attrs({
  as: 'h2',
})`
  font-size: 28px;
`;

export const Title = styled(BaseText).attrs({
  as: 'p',
})`
  font-size: 20px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '12px'};
`;

export const Body = styled(BaseText).attrs({
  as: 'p',
})`
  font-size: 14px;
  line-height: 1.38;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '4px'};
`;
