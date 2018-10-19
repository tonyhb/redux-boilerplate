const path = require("path");
const { addBabelPlugin } = require("customize-cra");

const overrides = [
  // ensure that "src" resolves locally without having to type relative paths
  // in imports
  config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.alias,
        src: path.resolve(__dirname, "src"),
      },
    },
  }),
  // use babel-plugin-emotion
  config => addBabelPlugin(["emotion", { hoist: true }])(config),
];

module.exports = (defaultConfig, env) =>
  overrides.reduce((config, func) => func(config, env), defaultConfig);
