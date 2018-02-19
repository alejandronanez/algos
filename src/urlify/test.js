const urlify = require('./index');

test('urlify OK', () => {
  expect(urlify('Mr John Smith       ', 13))
    .toEqual('Mr%20John%20Smith');
});
