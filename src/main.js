require('babel-polyfill');
import React from 'react';

import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import Timer from './components/timer';
import Todos from './components/todos';

import store from './store';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Todos/>
    </Provider>
    <Provider store={store}>
      <Timer/>
    </Provider>
  </div>,
  document.getElementById('root')
);
