/**
 Given a mapping of digits to letters (as in a phone number), and a digit string.
 Return all possible letters the number could represent.
{
  “2”: [“a”, “b”, “c”],
  "3": [“d”, “e”, “f”],
…}

then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

function permutations(digits, map) {
  const [digit, ...restOfDigits] = digits.toString().split('');

  const result = [];

  if (digits.length === 1) {
    return map[digit];
  }

  for (element in map[digit]) {
    const restOfDigitsAsString = restOfDigits.join('');

    for (per in permutations(restOfDigitsAsString, map)) {
      result.push(map[digit][element] + map[restOfDigitsAsString][per]);
    }
  }

  return result;
}

module.exports = permutations;
