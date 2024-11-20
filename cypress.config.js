const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({ 
  experimentalStudio: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: false,
    videoOnFailOnly: false
  },
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    viewportHeight: 1920,
    viewportWidth: 1080,
    baseUrl : 'https://www.karaca.com.de',
    env: {
      grepFilterSpecs: true,
      grepFilterSpecs: true,
      grepOmitFiltered: true,
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    downloadsFolder: 'cypress/downloads',
  },
  chromeWebSecurity : false,
  defaultCommandTimeout : 10000
});
