
/* eslint-disable */

module.exports = {
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

