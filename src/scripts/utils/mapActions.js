'use strict';

import { bindActionCreators } from 'redux';

export let mapActions = (actions) => {
  return (dispatch) => { return { actions: bindActionCreators(actions, dispatch) }; };
};
