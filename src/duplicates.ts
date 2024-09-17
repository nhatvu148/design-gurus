/// <reference no-default-lib="true"/>
class Solution {
  containsDuplicate(nums) {
    const uniqueSet = new Set(); // Use Set to store unique elements
    for (let i = 0; i < nums.length; i++) {
      if (uniqueSet.has(nums[i])) {
        // If the set already contains the current element, return true
        return true;
      }
      uniqueSet.add(nums[i]); // Add the current element to the set
    }
    return false; // Return false if no duplicates found
  }
}

const sol = new Solution();
const nums1 = [1, 2, 3, 4];
console.log(sol.containsDuplicate(nums1)); // Expected output: false

const nums2 = [1, 2, 3, 1];
console.log(sol.containsDuplicate(nums2)); // Expected output: true

const nums3 = [];
console.log(sol.containsDuplicate(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(sol.containsDuplicate(nums4)); // Expected output: true
