import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import LikeCounter from './LikeCounter';
import counterReducer from './Reducer';

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <LikeCounter />
  </Provider>,
  document.getElementById('root')
);