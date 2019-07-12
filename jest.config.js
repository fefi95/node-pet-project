module.exports = {
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",

   transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
};
