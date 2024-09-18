/// <reference no-default-lib="true"/>
class Solution {
  isPalindrome(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Initialize two pointers
    let left = 0;
    let right = str.length - 1;

    // Use a while loop to compare characters from both ends
    while (left < right) {
      // If characters don't match, it's not a palindrome
      if (str[left] !== str[right]) {
        return false;
      }
      // Move pointers towards the center
      left++;
      right--;
    }

    return true;
  }
}

const sol = new Solution();
console.log(sol.isPalindrome("Was it a car or a cat I saw?"));
