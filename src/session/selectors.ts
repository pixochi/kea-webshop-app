import { RootState } from '../redux/root-reducer';
import { createSelector } from 'reselect';

const getSessionState = (state: RootState) => state.session;

export const getIsAuthorized = createSelector(
  getSessionState,
  (session) => Boolean(session.token),
);

export const getRedirectTo = createSelector(
  getSessionState,
  (session) => session.redirectTo,
);
