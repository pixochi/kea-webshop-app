import React from 'react';

import ScreenCenter from '../components/screen-center';
import Container from '../components/container';

import CheckoutForm from './form';

const Checkout = () => {
  return (
    <ScreenCenter>
      <Container>
        <CheckoutForm />
      </Container>
    </ScreenCenter>
  );
};

export default Checkout;
