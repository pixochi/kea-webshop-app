import { combineEpics } from 'redux-observable';

import globalEventEpic from './components/global-event/epics';
import productsEpic from './products/epics';
import signUpEpic from './sign-up/epics';
import loginEpic from './login/epics';
import sessionEpic from './session/epics';

export const rootEpic = combineEpics(
  globalEventEpic,
  productsEpic,
  signUpEpic,
  loginEpic,
  sessionEpic,
);

export default rootEpic;
