import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../root-epic';
import { getFromLocalStorage } from '../services/local-storage';
import { SessionState } from '../session/reducer';

import createRootReducer, { RootState } from './root-reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

export const configureStore = (preloadedState?: Partial<RootState>) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        epicMiddleware,
      ),
    ),
  );

  epicMiddleware.run((rootEpic as any));

  return store;
};

const sessionToken = getFromLocalStorage('token');

export const store = configureStore({
  session: new SessionState({
    token: sessionToken ? sessionToken : '',
  }),
});
