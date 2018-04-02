// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(1)
//       '#'
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (!n) {
    return;
  }

  let count = 0;
  let stepsCount = 1;

  while (count < n) {
    const spaces = ` `.repeat(n - stepsCount);
    const steps = `#`.repeat(stepsCount);

    stepsCount++;
    count++;
    console.log(`${steps}${spaces}`);
  }
}

module.exports = steps;
