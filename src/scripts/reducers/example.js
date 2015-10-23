'use strict';

import Immutable from 'immutable';

const reducers = {
  /**
   * Increment a counter by a specific amount
   */
  ['INCREMENT']: (state, action) => {
    if (typeof action.payload === 'number') {
      let counter = state.get('counter');
      return state.set('counter', counter + action.payload);
    }
    return state;
  },

  /**
   * Decrement a counter by a specific amount
   */
  ['DECREMENT']: (state, action) => {
    if (typeof action.payload === 'number') {
      let counter = state.get('counter');
      return state.set('counter', counter - action.payload);
    }
    return state;
  }
};

const defaultState = Immutable.Map({
  counter: 0
});

export default function example(state = defaultState, action) {
  if (typeof reducers[action.type] === 'function') {
    // Call the given reducer from action.type with the current state
    return reducers[action.type](state, action);
  }
  // If there was no reducer function to modify state return our existing state
  return state;
}
