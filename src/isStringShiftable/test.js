const isStringShiftable = require('./index');

test('isStringShiftable works correctly', () => {
  expect(isStringShiftable('abcde', 'cdeab')).toBe(true);
  expect(isStringShiftable('abcde', 'abcde')).toBe(true);
  expect(isStringShiftable('abc', 'acb')).toBe(false);
  expect(isStringShiftable('abcd', 'acb')).toBe(false);
  expect(isStringShiftable('abc', 'abc')).toBe(true);
});