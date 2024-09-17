/// <reference no-default-lib="true"/>
class Solution {
  reverseVowels(s) {
    const vowelList = [];
    const chars = s.split("");
    for (let i = 0; i < chars.length; i++) {
      if (this.isVowel(chars[i])) {
        vowelList.push(chars[i]);
      }
    }

    for (let i = 0; i < chars.length; i++) {
      if (this.isVowel(chars[i])) {
        const poppedChar = vowelList.pop();
        chars[i] = poppedChar;
      }
    }

    return chars.join("");
  }

  isVowel(s) {
    return ["a", "i", "u", "e", "o"].includes(s.toLowerCase());
  }
}

const solution = new Solution();

const s1 = "hello";
const expected_output1 = "holle";
const actual_output1 = solution.reverseVowels(s1);
console.log("Test Case 1: ", expected_output1 === actual_output1);

const s2 = "DesignGUrus";
const expected_output2 = "DusUgnGires";
const actual_output2 = solution.reverseVowels(s2);
console.log("Test Case 2: ", expected_output2 === actual_output2);

const s3 = "AEIOU";
const expected_output3 = "UOIEA";
const actual_output3 = solution.reverseVowels(s3);
console.log("Test Case 3: ", expected_output3 === actual_output3);

const s4 = "aA";
const expected_output4 = "Aa";
const actual_output4 = solution.reverseVowels(s4);
console.log("Test Case 4: ", expected_output4 === actual_output4);

const s5 = "";
const expected_output5 = "";
const actual_output5 = solution.reverseVowels(s5);
console.log("Test Case 5: ", expected_output5 === actual_output5);
