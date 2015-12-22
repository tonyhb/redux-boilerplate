'use strict';

// Import all reducers and export a single combined reducer
import { combineReducers } from 'redux';
import example from './example';
import { routeReducer } from 'redux-simple-router';

export default combineReducers({
  router: routeReducer,
  // app-specific reducers
  example
});
