/**
  Given two arrays, find the minimal element that occurs in both of them. Write a function:
  function solution(A, B);
  that, given a non-empty zero-indexed array A of N non-negative integers and a non-empty zero-indexed array B of M non- negative integers, returns the minimal value that occurs in both arrays. If there is no such value, the function should return −1.
  For example, given arrays A and B such that:​
  A = [1,2,3] B = [2, 3, 5] => 2
  A = [1,2,3] B = [4,5,6] => -1
 */

function commonMin(A, B) {
  const intersection = A.filter(num => B.indexOf(num) !== -1);

  if (!intersection.length) {
    return -1;
  }

  let min = intersection[0];

  for (let i = 0; i < intersection.length; i++) {
    if (intersection[i] <= min) {
      min = intersection[i];
    }
  }

  return min || -1;
}

module.exports = commonMin;
