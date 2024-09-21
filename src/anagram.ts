/// <reference no-default-lib="true"/>
class Solution {
  isAnagram(s, t) {
    const v = {};
    for (let i = 0; i < s.length; i++) {
      const si = s[i];
      v[si] = (v[si] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
      const ti = t[i];
      v[ti] = (v[ti] || 0) - 1;
    }

    return Object.values(v).every(element => element === 0);
  }
}

const sol = new Solution();
console.log(sol.isAnagram("listen", "silent"));
console.log(sol.isAnagram("hello", "world"));
console.log(sol.isAnagram("anagram", "nagaram"));
console.log(sol.isAnagram("rat", "car"));
console.log(sol.isAnagram("", ""));
