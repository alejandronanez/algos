const randomNumberInList = require('./index');

test('randomNumberInList should the correct random number', () => {
  const expectedRange = [0, 3];
  const list = [1, 2, 5];
  const top = 4;
  const result = randomNumberInList(4, list);

  expect(expectedRange).toContain(result);
});
