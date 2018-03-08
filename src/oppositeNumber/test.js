const oppositeNumber = require('./index');

test('oppositeNumber OK', () => {
  expect(oppositeNumber(-1)).toEqual(1);
  expect(oppositeNumber(1)).toEqual(-1);
  expect(oppositeNumber(0)).toEqual(0);
});
