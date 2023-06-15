module.exports = {
  'setupFilesAfterEnv': ['@testing-library/jest-dom/extend-expect'],
  'testEnvironment': 'jsdom',
  'moduleNameMapper': {
    '^.+\\.(css|less)$': '<rootDir>/CssStub.js',
    '^.+\\.(svg)$': '<rootDir>/CssStub.js',
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(tests|spec))\\.[jt]sx?$',
};
