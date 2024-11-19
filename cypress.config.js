const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.karaca.com.de',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity : false,
  defaultCommandTimeout : 10000

});
