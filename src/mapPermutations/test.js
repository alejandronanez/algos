const permutation = require('./index');

test('permutation works', () => {
  const expectedResult = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f']
  };

  const result = permutation(23, map);

  expect(result).toEqual(expectedResult);
});

test('permutation works when digits does not exist', () => {
  const expectedResult = [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f']
  };

  const result = permutation(14, map);

  expect(result).toEqual(expectedResult);
});

test('permutation works on empty map', () => {
  const expectedResult = [];
  const map = {};

  const result = permutation(14, map);

  expect(result).toEqual(expectedResult);
});
