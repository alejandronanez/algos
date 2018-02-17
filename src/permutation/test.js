const permutation = require('./index');

test('string1 is permutation of string2', () => {
  expect(permutation('abcde', 'edcba')).toEqual(true);
});

test('string1 is not permutation of string2', () => {
  expect(permutation('alejandro', 'alejandra')).toEqual(false);
  expect(permutation('namefoo', 'baz')).toEqual(false);
});
