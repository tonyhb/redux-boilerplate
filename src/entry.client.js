// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from 'react-hot-loader';
import App from "./app";
import create from "./store";

const appEl = document.getElementById("app");

// create a new store and manager for the client session
const { store, manager } = create();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component store={store} manager={manager} />
      </BrowserRouter>
    </AppContainer>
    ,
    appEl,
  );
};

render(App);

if (process.env.NODE_ENV === "development") {
  // by including this in a NODE_ENV check babel will strip this out
  // of production builds entirely.
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept("./app.js", () => {
      const Next = require('./app.js').default; // eslint-disable-line global-require
      render(Next);
    });
  }
}
