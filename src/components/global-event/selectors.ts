import { RootState } from '../../redux/root-reducer';

export const getGlobalEvent = (state: RootState) => state.globalEvent;
