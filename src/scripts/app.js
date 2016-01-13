'use strict';

import React, { Component, PropTypes } from 'react';
import css from 'react-css-modules';
import styles from './app.css';

@css(styles)
export default class App extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div styleName='wrap'>
        <p>Container for your app: add global headers/footers/wrapper components such as modals here.</p>
        { this.props.children }
      </div>
    );
  }
}
