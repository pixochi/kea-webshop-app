import { combineEpics } from 'redux-observable';

import globalEventEpic from './components/global-event/epics';
import productsEpic from './products/epics';

export const rootEpic = combineEpics(
  globalEventEpic,
  productsEpic,
);

export default rootEpic;
