'use strict';

import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div>
        <p>Container for your app: add global headers/footers/wrapper components such as modals here.</p>
        { this.props.children }
      </div>
    );
  }
}
