// @flow
import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Loader } from "tectonic";

import Base from "./scenes/base/base";
import Dashboard from "./scenes/dashboard/dashboard";

// XXX proper types
type Props = {
  store: Object,
  manager: Object,
}

const App = ({ store, manager }: Props) =>
  <Provider store={store}>
    <Loader manager={manager}>
      <Base>
        <Route exact path="/" component={Dashboard} />
      </Base>
    </Loader>
  </Provider>;

export default App;
