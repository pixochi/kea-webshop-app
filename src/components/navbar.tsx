import React from 'react';
import { Link } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

import { Flex, Base } from './styleguide/layout';
import { Title, Body } from './styleguide/text';
import PowerOff from './icons/power-off';
import UserImage from './user-image';

import styled from './styleguide';
import { s0, s1, s4, s5 } from './styleguide/spacing';
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

const CartItemsCount = styled(Body)`
  padding: 2px 8px;
  border-radius: 50%;
  background: white;
  color: ${props => props.theme.submit};
`;

// TODO: implement login
interface StateProps {
  isLoggedIn: boolean;
  userId: string;
  cartItemsCount: number;
}

type Props = StateProps;

const Navbar: React.SFC<Props> = (props) => {

  const {
    isLoggedIn,
    cartItemsCount,
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
            <Link to={`about`}>
              <Flex align="center" marginRight={s5}>
                <Body marginBottom={s0} inverted>About</Body>
              </Flex>
            </Link>
            <Link to={`contact`}>
              <Flex align="center" marginRight={s5}>
                <Body marginBottom={s0} inverted>Contact</Body>
              </Flex>
            </Link>
            <Link to={`login`}>
              <Flex align="center" marginRight={s5}>
                <Body marginBottom={s0} inverted>Login</Body>
              </Flex>
            </Link>
            <Link to={`signup`}>
              <Flex align="center" marginRight={s5}>
                <Body marginBottom={s0} inverted>Sign up</Body>
              </Flex>
            </Link>
            <Link to={`checkout`}>
              <Flex align="center">
                <Body marginBottom={s0} marginRight={s1} inverted>Cart</Body>
                <CartItemsCount marginBottom={s0} emphasized>{cartItemsCount}</CartItemsCount>
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
    cartItemsCount: state.cart.items.reduce<number>((acc, item) => acc + item.amount, 0),
  })),
)(Navbar);
