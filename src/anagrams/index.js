// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function hashMapper(string) {
  return string.split('').reduce(
    (letterHashMap, letter) => ({
      ...letterHashMap,
      [letter]: !letterHashMap.letter ? 1 : letterHashMap.letter + 1
    }),
    {}
  );
}

function anagrams(stringA, stringB) {
  const cleanerRegexp = /[a-z]/gi;
  const cleanStringA = stringA
    .match(cleanerRegexp)
    .join('')
    .toLowerCase();
  const cleanStringB = stringB
    .match(cleanerRegexp)
    .join('')
    .toLowerCase();

  if (cleanStringA.length !== cleanStringB.length) {
    return false;
  }

  const hashMapStringA = hashMapper(cleanStringA);
  const hashMapStringB = hashMapper(cleanStringB);

  for (let key in hashMapStringA) {
    if (!hashMapStringB[key] || hashMapStringA[key] !== hashMapStringB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
