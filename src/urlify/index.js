/**
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the addiotional characters, and that you are givven the "true" length of the string
 * CTCI. Strings #3
 */

function urlify(string) {
  if (!string || !string.length) {
    return;
  }

  let wordAsArray = string.trim().split('');
  let index = wordAsArray.length - 1;

  while(index >= 0) {
    if (wordAsArray[index] === ' ') {
      wordAsArray[index] = '%20';
    } else {
      wordAsArray[index] = string[index];
    }
    index--;
  }

  return wordAsArray.join('');
}

urlify('Mr John Smith      ');

module.exports = urlify;
