import { combineEpics } from 'redux-observable';

import globalEventEpic from './components/global-event/epics';

export const rootEpic = combineEpics(
  globalEventEpic,
);

export default rootEpic;
