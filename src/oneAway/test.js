const oneAway = require('./index');

test('oneAway OK', () => {
  expect(oneAway('pale', 'ple')).toBeTruthy();
  expect(oneAway('pales', 'pale')).toBeTruthy();
  expect(oneAway('pale', 'bale')).toBeTruthy();
  expect(oneAway('pale', 'pale')).toBeFalsy();
  expect(oneAway('pale', 'bake')).toBeFalsy();
  expect(oneAway('pale', 'lepa')).toBeFalsy();
  expect(oneAway('pale', 'xpalex')).toBeFalsy();
  expect(oneAway('pale', 'al')).toBeFalsy();
});
