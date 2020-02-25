module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}', // exclude test files from coverage
    '!src/App.js', // exclude App from coverage
    '!src/routes.js',
    '!src/index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
};
