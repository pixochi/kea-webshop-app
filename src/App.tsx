import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Paul from './Paul';
import {store} from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Paul />
        </header>
      </div>
    </Provider>
  );
}

export default App;
