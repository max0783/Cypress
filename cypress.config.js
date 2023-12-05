const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/integration/**/*.feature",
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
    supportFile: "cypress/support/e2e.js",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
