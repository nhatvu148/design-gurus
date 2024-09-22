class Solution {
  numGoodPairs(nums) {
    const goodMap = {};
    let pairCount = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      (goodMap[num] = goodMap[num] || []).push(i);
    }

    for (let [key, value] of Object.entries(goodMap)) {
      const len = value.length;
      if (len < 2) {
        continue;
      }
      pairCount += this.c(2, len);
    }

    return pairCount;
  }

  c(k, n) {
    if (k == 0 || k == n) return 1;
    if (k == 1) return n;
    return this.c(k - 1, n - 1) + this.c(k, n - 1);
  }
}

const sol = new Solution();
let nums1 = [1, 2, 3, 1, 1, 3];
let result1 = sol.numGoodPairs(nums1);
console.log(`Result 1: ${result1} (Expected: 4)`);

let nums2 = [1, 1, 1, 1];
let result2 = sol.numGoodPairs(nums2);
console.log(`Result 2: ${result2} (Expected: 6)`);

let nums3 = [1, 2, 3];
let result3 = sol.numGoodPairs(nums3);
console.log(`Result 3: ${result3} (Expected: 0)`);
