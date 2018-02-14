// Determine if a word's characters are unique
// CTCI. Strings #1
// My own solution
function isUnique(word) {
  const resultObject = word
    .split('')
    .reduce((wordsObject, character) => ({
      ...wordsObject,
      [character]: !wordsObject[character] ? 1 : wordsObject[character] + 1
    }), {});

  return !Object
    .values(resultObject)
    .filter(totalChars => totalChars > 1)
    .length
}

module.exports = isUnique;
