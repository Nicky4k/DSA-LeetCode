/**
 * 1. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = s.split("");
  let op = obj[arr[arr.length - 1]];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (obj[arr[i]] < obj[arr[i + 1]]) {
      op -= obj[arr[i]];
    } else {
      op += obj[arr[i]];
    }
  }
  console.log("==>", op);
};
// romanToInt("LVIII");

/**
 * 2. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      res = strs[0].slice(0, i + 1);
    } else {
      break;
    }
  }
  console.log(res);
};
// longestCommonPrefix(["flower", "flow", "flight"]);
// longestCommonPrefix(["a"]);
// longestCommonPrefix(["flower", "flower", "flower", "flower"]);

/**
 * 3. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const openings = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (openings[s[i]]) {
      stack.push(s[i]);
    } else if (s[i] === openings[stack.at(-1)]) {
      stack.pop();
    } else {
      console.log(false);
      return;
    }
  }
  console.log(stack.length === 0 ? true : false);
};

// isValid("()[]{}");
// isValid("]");

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  console.log(s.trim().split(" ").at(-1).length);
};
// lengthOfLastWord("Hello World");
// lengthOfLastWord("   fly me   to   the moon  ");

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let remainder = 0;
  let res = [];
  for (let i = Math.max(a.length, b.length) - 1; i >= 0; i--) {
    if (a[i] === 1 && b[i] === 1) [];
  }
};
addBinary("1010", "1011");

/**
 * 
🚨 Must Solve String Questions:
13. Roman to Integer
14. Longest Common Prefix
20. Valid Parentheses
125. Valid Palindrome
171. Excel Sheet Column Number
242. Valid Anagram
344. Reverse String
387. First Unique Character in a String
412. Fizz Buzz

🚨 Premium questions Leetcode:
1626. Best Team With No Conflicts
157. Read N Characters Given Read
243. Shortest Word Distance
266. Palindrome Permutation
604. Design Compressed String Iterator
734. Sentence Similarity
1065. Index Pairs of a String
1165. Single-Row Keyboard
1180. Count Substrings with Only One Distinct Letter
1427. Perform String Shifts
*/
