'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { example } from 'actions';
import { mapActions } from 'utils';
import css from 'react-css-modules';
import styles from './dasbhoard.css';

const mapState = (state) => {
  return {
    example: state.example
  };
};

@connect(mapState, mapActions(example))
@css(styles)
export default class Dashboard extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      increment: PropTypes.function,
      decrement: PropTypes.function
    }).isRequired,
    example: PropTypes.instanceOf(Immutable.Map)
  }

  increment() {
    this.props.actions.increment(1);
  }

  decrement() {
    this.props.actions.decrement(1);
  }

  render() {
    return (
      <div>
        <h1 styleName='heading'>Dashboard</h1>
        <p>Counter: { this.props.example.get('counter') }</p>

        <button onClick={ ::this.increment }>Add</button>
        <button onClick={ ::this.decrement }>Remove</button>
      </div>
    );
  }

}
