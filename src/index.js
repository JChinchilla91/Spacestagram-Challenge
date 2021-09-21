import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadState, saveState } from './utils/localStorage'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppReducer as reducer } from './store/reducer/reducerIndex.js';

require('dotenv').config();

const persistedState = loadState();

const applicationStore = createStore(reducer, persistedState, applyMiddleware(thunk));

applicationStore.subscribe(() => {
  saveState(applicationStore.getState());
});

ReactDOM.render(
  <Provider store={applicationStore} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
