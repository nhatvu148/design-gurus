class Solution {
  mySqrt(x) {
    if (x < 2) return x; // return x if it is 0 or 1

    let left = 2;
    let right = Math.floor(x / 2);
    let mid;
    let num;
    while (left <= right) {
      mid = Math.floor(left + (right - left) / 2);
      num = mid * mid;
      if (num > x)
        right = mid - 1; // if mid * mid is greater than x, set right to mid - 1
      else if (num < x)
        left = mid + 1; // if mid * mid is less than x, set left to mid + 1
      else return mid; // if mid * mid is equal to x, return mid
    }

    return right;
  }
}

const sol = new Solution();
// test cases
console.log(sol.mySqrt(4) === 2); // expected output: true
console.log(sol.mySqrt(8) === 2); // expected output: true
console.log(sol.mySqrt(2) === 1); // expected output: true
console.log(sol.mySqrt(3) === 1); // expected output: true
console.log(sol.mySqrt(15) === 3); // expected output: true
