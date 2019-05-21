import React from 'react';

import styled from './styleguide';

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 780px;
  min-width: 250px;
`;

const ScreenCenter: React.SFC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default ScreenCenter;
