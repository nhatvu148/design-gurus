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
// Test case 1: "A man, a plan, a canal, Panama!"
// Expected output: true
console.log(sol.isPalindrome("A man, a plan, a canal, Panama!"));

// Test case 2: "race a car"
// Expected output: false
console.log(sol.isPalindrome("race a car"));

// Test case 3: "Was it a car or a cat I saw?"
// Expected output: true
console.log(sol.isPalindrome("Was it a car or a cat I saw?"));

// Test case 4: "Madam, in Eden, I'm Adam."
// Expected output: true
console.log(sol.isPalindrome("Madam, in Eden, I'm Adam."));

// Test case 5: "empty string"
// Expected output: true
console.log(sol.isPalindrome(""));
