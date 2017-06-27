module.exports = {
  plugins: [
    // TODO: Enable after https://github.com/stylelint/stylelint/pull/2561
    // require('stylelint')({
    //   "extends": "stylelint-config-standard",
    //   "rules": {
    //     "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
    //     "number-leading-zero": ["never"],
    //   }
    // }),
    require("postcss-reporter")({
      clearMessages: true,
    }),
    require("postcss-nested"),
    require('postcss-assets')({
      loadPaths: ['./build/img', './build/svg'],
    }),
    require('postcss-svgo')(),
    require('postcss-modules')({
      generateScopedName: '[name]__[local]--[hash:base64:5]', // passed into css-loader as [local]
    }),
  ],
}
