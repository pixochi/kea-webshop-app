import { ThemedStyledProps } from 'styled-components';
import {
  FlexDirectionProperty,
  StandardLonghandProperties,
  JustifyContentProperty,
  AlignContentProperty,
  FlexWrapProperty,
} from 'csstype';

import styled from '../../styleguide';
import {Spacing} from '../../styleguide/spacing';
import { Theme } from '../../styleguide/theme';
import { DOMAttributes } from 'react';

export interface IBaseLayoutProps {
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  margin?: Spacing;
  marginVertical?: Spacing;
  marginHorizontal?: Spacing;

  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  padding?: Spacing;
  paddingVertical?: Spacing;
  paddingHorizontal?: Spacing;

  clickable?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  grow?: StandardLonghandProperties['flexGrow'];
}

type BasePropsWithTheme<T = {}> = ThemedStyledProps<IBaseLayoutProps & DOMAttributes<any> & T, Theme>;

export const Base = styled.div<BasePropsWithTheme>`
  margin-top: ${props => props.marginTop || props.marginVertical || props.margin};
  margin-bottom: ${props => props.marginBottom || props.marginVertical || props.margin};
  margin-left: ${props => props.marginLeft || props.marginHorizontal || props.margin };
  margin-right: ${props => props.marginRight || props.marginHorizontal || props.margin};

  padding-top: ${props => props.paddingTop || props.paddingVertical || props.padding};
  padding-bottom: ${props => props.paddingBottom || props.paddingVertical || props.padding};
  padding-left: ${props => props.paddingLeft || props.paddingHorizontal || props.padding};
  padding-right: ${props => props.paddingRight || props.paddingHorizontal || props.padding};

  flex-grow: ${props => props.grow};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  height: ${props => props.fullHeight ? '100%' : 'auto'};

  cursor: ${props => props.clickable ? 'pointer' : ''};
`;

export interface IFlexProps extends IBaseLayoutProps {
  direction?: FlexDirectionProperty;
  justify?: JustifyContentProperty;
  align?: AlignContentProperty;
  wrap?: FlexWrapProperty;
  isInline?: boolean;
}

export const Flex =  styled(Base)<BasePropsWithTheme<IFlexProps>>`
  display: ${props => props.isInline ? 'inline-flex' : 'flex'};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
`;
