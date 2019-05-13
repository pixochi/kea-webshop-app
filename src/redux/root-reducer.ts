import { combineReducers } from 'redux';
import { FormStateMap, reducer as formReducer } from 'redux-form';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import sessionReducer, { SessionState } from '../session/reducer';
import globalEventReducer, { GlobalEventState } from '../components/global-event/reducer';
import login, { LoginState } from '../login/reducer';

export interface RootState {
  router: RouterState;
  form: FormStateMap;
  session: SessionState;
  globalEvent: GlobalEventState;
  login: LoginState;
}

export default (history: History<any>) => combineReducers<RootState>({
  router: connectRouter(history),
  form: formReducer,
  session: sessionReducer,
  globalEvent: globalEventReducer,
  login,
});
