import { combineEpics } from 'redux-observable';

import globalEventEpic from './components/global-event/epics';
import productsEpic from './products/epics';
import signUpEpic from './sign-up/epics';

export const rootEpic = combineEpics(
  globalEventEpic,
  productsEpic,
  signUpEpic,
);

export default rootEpic;
