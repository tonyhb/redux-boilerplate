'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';

// Import all of our custom reducers from reducers/index.js
import reducer from 'reducers';
const store = createStore(reducer);
const history = createHistory();

syncReduxAndRouter(history, store, (state) => state.router);

import App from './app.js';
import {
  Dashboard,
  NotFound
} from 'components/scenes';

export const Routes = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Dashboard } />
        <Route path='*' component={ NotFound } />
      </Route>
    </Router>
  </Provider>
);
