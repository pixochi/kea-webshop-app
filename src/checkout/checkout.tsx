import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {List} from 'immutable';

import ScreenCenter from '../components/screen-center';
import Container from '../components/container';
import { Flex } from '../components/styleguide/layout';
import { Body } from '../components/styleguide/text';

import { RootState } from '../redux/root-reducer';
import { CartItem } from '../cart/reducer';
import styled from '../components/styleguide';

import CheckoutForm from './form';
import { s4, s6, s8 } from '../components/styleguide/spacing';
import { formValueSelector } from 'redux-form';

const getCityPriceCoefficient = (city: string) => {
  if (city && city.toLowerCase() === 'copenhagen') {
    return 0.9;
  }

  return 1;
};

const getStudentPriceCoefficient = (isStudent: boolean) => {
  return isStudent ? 0.9 : 1;
};

const getTotalPriceCoefficient = (totalPriceWithoutDiscount: number) => {
  if (totalPriceWithoutDiscount >= 2500) {
    return 0.9;
  }
  else if (totalPriceWithoutDiscount >= 1500) {
    return 0.95;
  }
  else if (totalPriceWithoutDiscount >= 1000) {
    return 0.97;
  }
  return 1;
};

const StyledBody = styled(Body)`
  flex: 1;
  text-align: center;
`;

interface StateProps {
  cartItems: List<CartItem>;
  city: string;
  isStudent: boolean;
}

type Props = StateProps;

const Checkout: React.SFC<Props> = (props) => {

  const {
    cartItems,
    city,
    isStudent,
  } = props;

  const baseTotalPrice = cartItems.reduce((acc, item) => acc + item.amount * item.product.price, 0);

  const cityPriceCoefficient = getCityPriceCoefficient(city)
  const totalPriceWithCityDiscount = Math.round(baseTotalPrice * cityPriceCoefficient * 100) / 100;

  const studentPriceCoefficient = getStudentPriceCoefficient(isStudent);
  const totalPriceWithStudentDiscount = Math.round(totalPriceWithCityDiscount * studentPriceCoefficient * 100) / 100;

  const totalPriceCoefficient = getTotalPriceCoefficient(baseTotalPrice);
  const totalPriceWithHighPriceDiscount = Math.round(totalPriceWithStudentDiscount * totalPriceCoefficient * 100) / 100;

  return (
    <ScreenCenter>
      <Container>
        {!cartItems.isEmpty() ? (
          <Flex direction="column">
            <Flex align="center" direction="row" justify="space-between" grow={1}>
              <StyledBody emphasized>Product name</StyledBody>
              <StyledBody emphasized>Price per item</StyledBody>
              <StyledBody emphasized>Amount </StyledBody>
              <StyledBody emphasized>Total amount</StyledBody>
            </Flex>
            {cartItems.map((item, i) => (
              <Flex align="center" direction="row" justify="space-between" grow={1} key={i}>
                <StyledBody>{item.product.name}</StyledBody>
                <StyledBody>{item.product.price}</StyledBody>
                <StyledBody>{item.amount}</StyledBody>
                <StyledBody>{item.amount * item.product.price}</StyledBody>
              </Flex>
          ))}
            <Flex justify="space-between" marginTop={s6}>
              <StyledBody emphasized> </StyledBody>
              <StyledBody emphasized> </StyledBody>
              <StyledBody emphasized>Total price</StyledBody>
              <StyledBody emphasized>{baseTotalPrice}</StyledBody>
            </Flex>
            {totalPriceCoefficient !== 1 && (
              <Flex justify="space-between">
                <StyledBody emphasized> </StyledBody>
                <StyledBody emphasized> </StyledBody>
                <StyledBody emphasized>With high price discount</StyledBody>
                <StyledBody emphasized>{totalPriceWithHighPriceDiscount}</StyledBody>
              </Flex>
            )}
            {cityPriceCoefficient !== 1 && (
              <Flex justify="space-between">
                <StyledBody emphasized> </StyledBody>
                <StyledBody emphasized> </StyledBody>
                <StyledBody emphasized>With shipping discount</StyledBody>
                <StyledBody emphasized>{totalPriceWithCityDiscount}</StyledBody>
              </Flex>
            )}
            {studentPriceCoefficient !== 1 && (
              <Flex justify="space-between">
                <StyledBody emphasized> </StyledBody>
                <StyledBody emphasized> </StyledBody>
                <StyledBody emphasized>With student discount</StyledBody>
                <StyledBody emphasized>{totalPriceWithStudentDiscount}</StyledBody>
              </Flex>
            )}
          </Flex>
        ) : (
          <Body>No items in cart</Body>
        )}
      </Container>
      <Container marginTop={s4} marginBottom={s8}>
        <CheckoutForm />
      </Container>
    </ScreenCenter>
  );
};

const checkoutFormSelector = formValueSelector('CHECKOUT_FORM');

export default compose<React.ComponentType<{}>>(
  connect((state: RootState): StateProps => ({
    cartItems: state.cart.items.toList(),
    city: checkoutFormSelector(state, 'town'),
    isStudent: checkoutFormSelector(state, 'isStudent'),
  })),
)(Checkout);
