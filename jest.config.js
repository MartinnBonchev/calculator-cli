// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
  moduleNameMapper: {
    "^@root/(.*)$": "<rootDir>/$1",
    "^@main/(.*)$": "<rootDir>/src/main/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
