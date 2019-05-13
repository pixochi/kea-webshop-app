import { SVGAttributes } from 'react';

import styled from './styleguide';

export interface ISvgProps extends SVGAttributes<any> {
  size?: number | string;
}

const Svg = styled.svg<ISvgProps>`
  width: ${({width, size}) => `${width ? width : size}px`};
  min-width: ${({width, size}) => `${width ? width : size}px`};
  height: ${({height, size}) => `${height ? height : size}px`};
  min-height: ${({height, size}) => `${height ? height : size}px`};
`;

export default Svg;
