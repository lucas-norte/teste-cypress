const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://url',
  },
  fixturesFolder: false,
  video: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 40000,
  viewportHeight: 760,
  viewportWidth: 1320,
})