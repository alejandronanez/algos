// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const totalCharacters = (n * 2) - 1;

  for (let i = 1; i <= n; i++) {
    const spaces = n - i;
    const pounds = totalCharacters - (spaces * 2);

    console.log(`${' '.repeat(spaces)}${'#'.repeat(pounds)}${' '.repeat(spaces)}`);
  }
}

module.exports = pyramid;
