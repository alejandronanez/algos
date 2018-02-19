function oneAway(firstString, resultString) {
  if (firstString === resultString) {
    return false;
  }

  const wordLenghtDifference = Math.abs(firstString.length - resultString.length);

  const top = firstString.length;
  let shortString = firstString;
  let longString = resultString;
  let hasErrors = false;
  let shortStringIndex = 0;
  let longStringIndex = 0;

  if (wordLenghtDifference >= 2) {
    return false;
  }

  if (resultString.length < firstString.length) {
    shortString = resultString;
    longString = firstString;
  }

  while (
    shortStringIndex < shortString.length &&
    longStringIndex < longString.length
  ) {
    if (shortString[shortStringIndex] !== longString[longStringIndex]) {
      if (hasErrors) {
        return false;
      }
      hasErrors = true;

      if (shortString.length === longString.length) {
        shortStringIndex++;
      }
    } else {
      shortStringIndex++;
    }
    longStringIndex++;
  }

  return true;
}

module.exports = oneAway;
