/// <reference no-default-lib="true"/>
class Solution {
  // Function to check if given sentence is pangram
  checkIfPangram(sentence) {
    // Create a set to store unique characters
    const seen = new Set();

    // Iterate over each character using a normal for loop
    for (let i = 0; i < sentence.length; i++) {
      // Convert the current character to lowercase
      const currChar = sentence[i].toLowerCase();

      if (/[a-z]/.test(currChar)) {
        // Add the character to the set
        seen.add(currChar);
      }
    }

    // Return true if set size is 26 (total number of alphabets)
    return seen.size === 26;
  }

  // checkIfPangram(sentence: string): boolean {
  //     const occurrences = this.countLetterOccurrences(sentence);
  //     // console.log(occurrences);
  //     // console.log(
  //     //     "Are all letter counts greater than 0?",
  //     //     this.areAllValuesGreaterThan(occurrences, 0)
  //     // );
  //     return this.areAllValuesGreaterThan(occurrences, 0);
  // }

  private createAlphabetMap(): Record<string, number> {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetMap: Record<string, number> = {};

    for (const letter of alphabet) {
      alphabetMap[letter] = 0;
    }

    return alphabetMap;
  }

  private countLetterOccurrences(text: string): Record<string, number> {
    const letterMap = this.createAlphabetMap();

    // Iterate through each character in the text
    for (const char of text.toLowerCase()) {
      if (letterMap.hasOwnProperty(char)) {
        letterMap[char] += 1; // Increment the count for the letter
      }
    }

    return letterMap;
  }

  private areAllValuesGreaterThan(
    map: Record<string, number>,
    number: number
  ): boolean {
    for (const key in map) {
      if (map[key] <= number) {
        return false; // If any value is not greater than the number, return false
      }
    }
    return true; // If all values are greater, return true
  }
}

const sol = new Solution();
console.log(sol.checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog")); // Expected output: true
console.log(sol.checkIfPangram("This is not a pangram")); // Expected output: false
console.log(sol.checkIfPangram("abcdef ghijkl mnopqr stuvwxyz")); // Expected output: true
console.log(sol.checkIfPangram("")); // Expected output: false
console.log(
  sol.checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
); // Expected output: true
