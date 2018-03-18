// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  const reversedNumber = sign < 0 ? `${n}`.split('-')[1].split('') : `${n}`.split('');

  return sign * Number(reversedNumber.reverse().join(''));
}

module.exports = reverseInt;
