const isUnique = require('./index');

test('abcdef is unique', () => {
  expect(isUnique('abcdef')).toEqual(true);
});

test('ana is unique', () => {
  expect(isUnique('ana')).toEqual(false);
});
