/**
 * Given 2 strings, write a method to decide if one is a permutation of the other
 * CTCI. Strings #2
 * My own solution
 */

 function stringHasher(string) {
   return string
    .split('')
    .reduce((hashMap, char) => ({
      ...hashMap,
      [char]: hashMap[char] ? hashMap[char] + 1 : 1
    }), {});
 }

 function permutation(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const hashMapA = stringHasher(stringA);
  const hashMapB = stringHasher(stringB);

  for (key in hashMapA) {
    if (hashMapA[key] !== hashMapB[key]) {
      return false;
    }
  }

  return true;
 }

 module.exports = permutation;
