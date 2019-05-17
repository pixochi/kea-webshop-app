import React from 'react';
import { Link } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

import { Flex, Base } from './styleguide/layout';
import { Title, Body } from './styleguide/text';
import PowerOff from './icons/power-off';
import UserImage from './user-image';

import styled from './styleguide';
import { s0, s2, s4, s5 } from './styleguide/spacing';
import { RootState } from '../redux/root-reducer';
import * as LoginActins from '../login/actions';

export const NAVBAR_HEIGHT = 50;
export const NAVBAR_HEIGHT_PX = `${NAVBAR_HEIGHT}px`;

const NavbarContainer = styled(Flex)`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 100;
  height: ${NAVBAR_HEIGHT_PX};
  background: ${props => props.theme.primaryDark};
  box-shadow: 0 2px 4px ${props => props.theme.shadowStrong};
`;

const PowerOffButton = styled(PowerOff).attrs({
  color: (props: any) => props.theme.secondary,
})`
  cursor: pointer;
`;

// TODO: implement login
interface StateProps {
  isLoggedIn: boolean;
  userId: string;
}

type Props = StateProps;

const Navbar: React.SFC<Props> = (props) => {

  const {
    isLoggedIn,
    userId,
  } = props;

  return (
    <NavbarContainer align="center" justify="space-between" paddingHorizontal={s4}>
      <Link to="/">
        <Title marginBottom={s0} inverted emphasized>iKEA</Title>
      </Link>

      <Flex align="center">
        {isLoggedIn ? (
          <>
            <PowerOffButton onClick={LoginActins.logOut.dispatch} />
          </>
        ) : (
          <Flex>
            <Link to={`login`}>
              <Flex align="center" marginRight={s5}>
                <Body marginBottom={s0} inverted>Login</Body>
              </Flex>
            </Link>
            <Link to={`signup`}>
              <Flex align="center">
                <Body marginBottom={s0} inverted>Sign up</Body>
              </Flex>
            </Link>
          </Flex>
        )}
      </Flex>
    </NavbarContainer>
  );
};

export default compose<React.ComponentType>(
  connect((state: RootState) => ({
    isLoggedIn: Boolean(state.login.user),
  })),
)(Navbar);
