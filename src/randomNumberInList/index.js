/**
 * Given an integer n and a list of integers l, write a function that randomly generates a number
 * from 0 to n-1 that isn't in l (uniform).
 */

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function processList(n, list) {
  const allNumsSet = new Set();
  const listSet = new Set();

  for (let i = 0; i < n; i++) {
    allNumsSet.add(i);
  }

  list.forEach(l => listSet.add(l));

  const differenceFromSets = new Set(
    [...allNumsSet].filter(allNumsElement => !listSet.has(allNumsElement))
  );

  return Array.from(differenceFromSets);
}

function randomNumberInList(n, list) {
  const numList = processList(n, list);
  const index = getRandomNumber(numList.length);

  return numList[index];
}

module.exports = randomNumberInList;
