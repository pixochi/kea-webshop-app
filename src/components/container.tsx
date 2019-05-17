import React, { HTMLAttributes } from 'react';

import styled from './styleguide';
import { Flex, IFlexProps, IBaseLayoutProps } from './styleguide/layout';

export const StyledContainer = styled(Flex)<IContainer>`
  background-color: ${props => props.theme.background};
  box-shadow:  ${props => props.noShadow ? 'unset' : `0 2px 4px ${props.theme.shadow}`};
  padding:  ${props => props.noPadding ? 0 : `16px`};
  padding-top:  ${props => props.noPadding ? 0 : `16px`};
  padding-bottom:  ${props => props.noPadding ? 0 : `16px`};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  border-radius: ${props => props.notRounded ? 0 : '7px'};
  margin: ${props => props.margined ? '24px' : 0};

  & > * {
    width: 100%;
  }
`;

interface IContainer {
  height?: number;
  noShadow?: boolean;
  noPadding?: boolean;
  notRounded?: boolean;
  margined?: boolean;
}

type Props = IFlexProps & IBaseLayoutProps & IContainer & HTMLAttributes<any>;

const Container: React.SFC<Props> = (props) => {
  return (
    <StyledContainer {...props}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
