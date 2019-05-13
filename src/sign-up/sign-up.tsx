import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {compose} from 'redux';
import { connect } from 'react-redux';

import { s2, s4 } from '../components/styleguide/spacing';
// import { loginSuccess } from '../login/actions';
import { RootState } from '../redux/root-reducer';
import { getIsLoggedIn } from '../components/private-route/selectors';

import ScreenCenter from '../components/screen-center';
import { Base } from '../components/styleguide/layout';
import { Body, Headline } from '../components/styleguide/text';

import Form, {SignUpFormData} from './form';

interface StateProps {
  isLoggedIn: boolean;
}
type Props =  StateProps;

export const SignUp = (props: Props) => {

  if (props.isLoggedIn) {
    return <Redirect to="/overview" />;
  }

  const handleSubmit = (values: SignUpFormData) => {
    // const {passwordRepeat, ...newUser} = values;

    console.log('Implement sign up', {values});
  };

  return (
    <ScreenCenter>
      <Headline textAlign="center">iKEA</Headline>
      <Base marginTop={s2}>
        <Body textAlign="center">Sign up to get iKEA products</Body>
      </Base>
      <Base marginTop={s4}>
        <Form onSubmit={handleSubmit}/>
      </Base>
      <Body marginTop={s4} textAlign="center">Do you have an account already? <Link to="/">Log in</Link></Body>
    </ScreenCenter>
  );
};

export default compose(
  connect<StateProps, {}, {}, RootState>((state) => ({
    isLoggedIn: getIsLoggedIn(state),
  })),
)(SignUp);
