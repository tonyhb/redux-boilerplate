// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import create from "./store";

const appEl = document.getElementById("app");

// create a new store and manager for the client session
const { store, manager } = create();

ReactDOM.render(
  <BrowserRouter>
    <App store={store} manager={manager} />
  </BrowserRouter>,
  appEl,
);

if (process.env.NODE_ENV === "development") {
  // by including this in a NODE_ENV check babel will strip this out
  // of production builds entirely.
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept("./app.js", () => {
      ReactDOM.render(
        <BrowserRouter>
          <App store={store} manager={manager} />
        </BrowserRouter>,
        appEl,
      );
    });
  }
}
