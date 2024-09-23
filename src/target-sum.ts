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

  pairWithTargetSum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (targetSum - num in nums) {
        return [nums[targetSum - num], i];
      }
      nums[num] = i;
    }
    return [-1, -1];
  }
}

const sol = new Solution();
console.log(sol.search([1, 2, 3, 4, 6], 6));
console.log(sol.search([2, 5, 9, 11], 11));
console.log(sol.search([0, 1, 2, 3, 4], 0));
console.log(sol.pairWithTargetSum([1, 2, 3, 4, 6], 6));
console.log(sol.pairWithTargetSum([2, 5, 9, 11], 11));
