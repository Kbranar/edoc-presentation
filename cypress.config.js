const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://www.karaca.com.de',
    env: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  retries: 1,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000
});
