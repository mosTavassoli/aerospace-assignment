// jest.config.js
require('dotenv').config({ path: '.env.test' });

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use jsdom as the test environment for browser-like behavior
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  // Add other Jest configurations as needed
};