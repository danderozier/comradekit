const path = require("path");

module.exports = {
  pluginOptions: {
    storybook: {
      allowedPlugins: ["sass-loader"]
    }
  },
  /**
   * Webpack configuration
   */
  configureWebpack: {
    resolve: {
      /**
       * Add aliases for common paths
       */
      alias: {
        "~": path.resolve(__dirname, "node_modules/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@scss": path.resolve(__dirname, "src/assets/scss/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@utilities": path.resolve(__dirname, "src/utilities/"),
        "@mixins": path.resolve(__dirname, "src/mixins/")
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@scss/variables.scss";
          @import "~@scss/reset.scss";
          @import "~@scss/typography.scss";
          @import "~@scss/utilities.scss";
        `
      }
    }
  }
};
