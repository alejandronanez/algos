/**
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or prhease that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 *
 * Example.
 *
 * palindromePermutation('Tact Coa') -> true
 * possible permutations: 'taco cat', 'atco cta', etc
 *
 * CTCI - Strings #1.4
 *
 * My own solution
*/
function hasher(string) {
  return string
    .split('')
    .reduce((hashMap, char) =>({
      ...hashMap,
      [char]: hashMap[char] ? hashMap[char] + 1 : 1
    }), {});
}

function palindromePermutation(word) {
  let totalEven = 0;
  const string = word.toLowerCase().split(' ').join(''); // word with no spaces
  const hashMap = hasher(string);

  Object
    .values(hashMap)
    .forEach(value => {
      if (value % 2 === 1) {
        totalEven++;
      }
    });

  return totalEven <= 1;
}

module.exports = palindromePermutation;
