/**
This problem was asked by Google.

Given two strings A and B, return whether or not A can be shifted some number of times to get B.

A = abcde and B = cdeba should return true
A = abc and B = acb should return false
*/

function isStringShiftable(stringA, stringB) {
  const arrayFromB = stringB.split('');
  let count = stringA.length;

  if (stringA.length !== stringB.length) {
    return false;
  }

  while (count) {
    const firstHalf = arrayFromB.slice(0, count - 1);
    const secondHalf = arrayFromB.slice(count - 1);
    const newWord = [...secondHalf, ...firstHalf].join('');

    if (newWord === stringA) {
      return true;
    }

    count--;
  }

  return false;
}

module.exports = isStringShiftable;
