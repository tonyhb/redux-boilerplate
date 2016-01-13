# Redux boilerplate

This project contains:

Tooling:

- `webpack 1.12`
- `babel 5.8`
- `eslint 1.7`
- `react-transform-hmr`: hot reloading
- `react-transform-hmr-catch-errors`: nice error screens
- `postcss 5`
- `postcss-nested 1` 
- `postcss-constants 0.1`
- `postcss-nested 1` 
- `cssnext 1.8`
- `normalize.css 3`
- `lost 6`: grid system
- `mocha 2`: testing
- `chai 3`: assertions
- `jsdom 7`: virtual rendering of react components within tests


Libraries:

- `react 0.14`
- `immutable 3.7`
- `redux 3`
- `redux-simple-router 1`: for storing router state in redux
- `react-css-modules`: for applying `css-modules` to react components

### NPM commands:


`npm run-script start`: Starts the dev server on http://localhost:3000/ with hot
reload. This uses `webpack.config.dev.js`
`npm run-script watch`: Starts webpack compilation to dist/bundle.{js,css} and 
*watches* for file changes. This uses `webpack.config.dev.js`
`npm run-script build`: Starts webpack compilation to dist/bundle.{js,css} using
the production config
