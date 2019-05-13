import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';

import './App.css';

import Routes from './routes';
import GlobalCSS from './components/global-css';

import {store} from './redux/store';
import theme from './components/styleguide/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalCSS theme={theme} />
          <Routes />
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
