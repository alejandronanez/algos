const palindromePermutation = require('./index');

test('palindromePermutation OK', () => {
  expect(palindromePermutation('Tact Coa')).toBeTruthy();
  expect(palindromePermutation('ana')).toBeTruthy();
  expect(palindromePermutation('abccba abccbaX')).toBeTruthy();
  expect(palindromePermutation('ananmeme')).toBeTruthy();
  expect(palindromePermutation('xananmeme')).toBeTruthy();
  expect(palindromePermutation('emna anme 4w')).toBeFalsy();
  expect(palindromePermutation('abc cde')).toBeFalsy();
});
