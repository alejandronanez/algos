const commonMin = require('./index');
test('common min', () => {
  expect(commonMin([1, 2, 3], [2, 3, 4])).toEqual(2);
  expect(commonMin([1, 2, 3], [4, 5, 6])).toEqual(-1);
});
