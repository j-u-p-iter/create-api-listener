module.exports = {
  "transform": { ".(ts|tsx)": "ts-jest" }, /* A map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous function for transforming source files. */
  "testEnvironment": "node", //The test environment that will be used for testing. The default environment in Jest is a browser-like environment through jsdom. If you are building a node service, you can use the node option to use a node-like environment instead.
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$", // The pattern Jest uses to detect test files.
  "moduleFileExtensions": ["ts", "tsx", "js"], // An array of file extensions your modules use. If you require modules without specifying a file extension, these are the extensions Jest will look for.
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/__tests__/"
  ], // An array of regexp pattern strings that are matched against all file paths before executing the test. If the file path matches any of the patterns, coverage information will be skipped.
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  }, // This will be used to configure minimum threshold enforcement for coverage results.
  "collectCoverage": true, // Indicates whether the coverage information should be collected while executing the test.
  "collectCoverageFrom": ["src/*.ts"] // An array of glob patterns indicating a set of files for which coverage information should be collected.
}
