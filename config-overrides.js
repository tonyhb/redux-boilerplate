const path = require("path");
const { injectBabelPlugin } = require("react-app-rewired");

const overrides = [
  // ensure that "src" resolves locally without having to type relative paths
  // in imports
  config => ({
    ...config,
    resolve: {
      ...config.resolve,
      modules: config.resolve.modules.concat([path.resolve(".")]),
    },
  }),
  // use babel-plugin-emotion
  config => injectBabelPlugin(["emotion", { hoist: true }], config),
];

module.exports = (defaultConfig, env) =>
  overrides.reduce((config, func) => func(config, env), defaultConfig);
