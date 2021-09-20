import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadState, saveState } from './utils/localStorage'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppReducer as reducer } from './store/reducer/reducerIndex.js';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
