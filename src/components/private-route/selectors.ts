import { createSelector } from 'reselect';

import { getUserId } from '../../login/selectos';

export const getIsLoggedIn = createSelector(
  getUserId,
  (userId): boolean => Boolean(userId),
);
