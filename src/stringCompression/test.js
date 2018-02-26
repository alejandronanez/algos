const stringCompression = require('./index');

test('stringCompression OK', () => {
  expect(stringCompression('aaabbbccc')).toEqual('a3b3c3');
  expect(stringCompression('abbccc')).toEqual('ab2c3');
  expect(stringCompression('abc')).toEqual('abc');
  expect(stringCompression('aabbcc')).toEqual('aabbcc');
});
