module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/pt.js',
    '!src/**/en.js',
    '!src/**/*.test.{js,jsx,ts,tsx}', // exclude test files from coverage
    '!src/index.js',
    '!src/reducer/withReducer.js',
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
