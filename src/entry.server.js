import React from "react";
import Express from "express";
import morgan from "morgan";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
// node
import path from "path";
// components
import HTML from "./components/html/html";
import App from "./app";
import create from "./store";

const app = new Express();

app.use(morgan("dev"));

// This is relative to the cwd of the server.js bundle when launching `node`
app.use("/assets", Express.static(path.join(__dirname)));

app.use((req, res) => {
  // create a new store and manager for this request only
  const { store, manager } = create();

  // render the app to a string.
  const data = ReactDOMServer.renderToString(
    <HTML>
      <StaticRouter location={req.url} context={{}}>
        <App store={store} manager={manager} />
      </StaticRouter>
    </HTML>,
  );

  res.send(`<!doctype html>${data}`);
});

/* global config */
console.log(`App listening on port ${config.PORT}`); // eslint-disable-line no-console
app.listen(config.PORT);
