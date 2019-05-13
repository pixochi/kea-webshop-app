import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {compose} from 'redux';

import { getIsLoggedIn } from '../components/private-route/selectors';
import { s4 } from '../components/styleguide/spacing';
import { RootState } from '../redux/root-reducer';
// import { updateError } from 'app/components/global-event/actions';

import ScreenCenter from '../components/screen-center';
import { Base } from '../components/styleguide/layout';
import { Body, Headline } from '../components/styleguide/text';

import Form from './form';

interface StateProps {
  isLoggedIn: boolean;
}

type Props = StateProps;

export class Login extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  public render() {
    const {
      isLoggedIn,
    } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/overview" />;
    }

    return (
      <ScreenCenter>
        <Headline textAlign="center">iKEA</Headline>
        <Base marginTop={s4}>
          <Form loading={false} onSubmit={this.handleLoginSubmit}/>
        </Base>
        <Body marginTop={s4} textAlign="center">Don't have an account? <Link to="/signup">Sign up</Link></Body>
      </ScreenCenter>
    );
  }

  private handleLoginSubmit(values: any) {
    console.log('Implement login');
  }
}

export default compose(
  connect<StateProps, {}, {}, RootState>((state) => ({
    isLoggedIn: getIsLoggedIn(state),
  })),
)(Login);
