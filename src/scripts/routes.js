'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import all of our custom reducers from reducers/index.js
import reducer from 'reducers';
const store = createStore(reducer);

import App from './app.js';
import {
  Dashboard,
  NotFound
} from 'components/scenes';

export const Routes = (
  <Provider store={ store }>
    <Router>
      <Route path='/' component={ App }>
        <IndexRoute component={ Dashboard } />
        <Route path='*' component={ NotFound } />
      </Route>

    </Router>
  </Provider>
);
