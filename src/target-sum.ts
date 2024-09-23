class Solution {
  search(arr, targetSum) {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === targetSum) {
        return [left, right];
      }

      if (targetSum > currentSum) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    return [-1, -1];
  }
}

const sol = new Solution();
console.log(sol.search([1, 2, 3, 4, 6], 6));
console.log(sol.search([2, 5, 9, 11], 11));
console.log(sol.search([0, 1, 2, 3, 4], 0));
