module.exports = {
    verbose: true,
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for JavaScript/TypeScript files
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // Regular expression to match test files
  };