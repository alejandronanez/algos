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
