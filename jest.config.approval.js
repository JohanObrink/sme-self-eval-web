const config = require('./jest.config');

module.exports = {
  ...config,
  collectCoverage: true,
  coverageThreshold: {
    global: {},
    /* './lib/form/questions/*.jsx': {
      branches: 25,
      functions: 80,
      lines: 60,
      statements: -10
    } */
  },
};
