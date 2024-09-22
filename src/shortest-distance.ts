class Solution {
  shortestDistance(words, word1, word2) {
    let shortestDistance = words.length; // Initialize the shortest distance with the length of the words list
    // Initialize the positions of word1 and word2 with -1
    let position1 = -1;
    let position2 = -1;

    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1) {
        // If the current word is word1, update the position1
        position1 = i;
      } else if (words[i] === word2) {
        // If the current word is word2, update the position2
        position2 = i;
      }
      // If both the positions are updated, update the shortest distance
      if (position1 !== -1 && position2 !== -1) {
        shortestDistance = Math.min(
          shortestDistance,
          Math.abs(position1 - position2)
        );
      }
    }
    return shortestDistance;
  }
}

const solution = new Solution();

// Test case 1
const words1 = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
const word11 = "fox";
const word21 = "dog";
const expectedOutput1 = 5;
const actualOutput1 = solution.shortestDistance(words1, word11, word21);
console.log("Test case 1:", expectedOutput1 === actualOutput1);

// Test case 2
const words2 = ["a", "b", "c", "d", "a", "b"];
const word12 = "a";
const word22 = "b";
const expectedOutput2 = 1;
const actualOutput2 = solution.shortestDistance(words2, word12, word22);
console.log("Test case 2:", expectedOutput2 === actualOutput2);

// Test case 3
const words3 = ["a", "c", "d", "b", "a"];
const word13 = "a";
const word23 = "b";
const expectedOutput3 = 1;
const actualOutput3 = solution.shortestDistance(words3, word13, word23);
console.log("Test case 3:", expectedOutput3 === actualOutput3);

// Test case 4
const words4 = ["a", "b", "c", "d", "e"];
const word14 = "a";
const word24 = "e";
const expectedOutput4 = 4;
const actualOutput4 = solution.shortestDistance(words4, word14, word24);
console.log("Test case 4:", expectedOutput4 === actualOutput4);
