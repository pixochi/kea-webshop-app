import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { history } from './redux/store';
import styled from './components/styleguide';

import PrivateRoute from './components/private-route/private-route';
import Navbar, { NAVBAR_HEIGHT_PX } from './components/navbar';

import Login from './login/login';
import SignUp from './sign-up/sign-up';
import Products from './products/products';
import Checkout from './checkout/checkout';
import About from './about/about';
import Contact from './contact/contact';

const RoutesContainer = styled.div`
  padding-top: ${NAVBAR_HEIGHT_PX};
`;

const Routes: React.SFC = () => (
  <ConnectedRouter history={history}>
    <>
      <Navbar />
      <RoutesContainer>
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <PrivateRoute path="/users/:userId" component={Login} />
        </Switch>
      </RoutesContainer>
    </>
  </ConnectedRouter>
);

export default Routes;
