const arrayFlattener = require('./index');

test('should flatten an array', () => {
  const initialArray = [[1, 2, 3], [[4], [[[5]]]]];
  const expectedResult = [1, 2, 3, 4, 5];

  expect(arrayFlattener(initialArray)).toEqual(expectedResult);
});

test('should return null if is not an array', () => {
  expect(arrayFlattener('a')).toEqual(null);
});
