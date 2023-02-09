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
 * asked in interview: Nimesa Technologies
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
  console.log(stack);
  console.log(stack.length === 0 ? true : false);
};

// isValid("()[]{}");
// isValid("]");
// isValid("(()())");

/**
 * 4. Length of Last Word
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  console.log(s.trim().split(" ").at(-1).length);
};
// lengthOfLastWord("Hello World");
// lengthOfLastWord("   fly me   to   the moon  ");

/**
 * 5. Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) {
    b = b.padStart(a.length, 0);
  } else {
    a = a.padStart(b.length, 0);
  }
  let remainder = 0;
  let res = "";
  for (let i = a.length - 1; i >= 0; i--) {
    switch (+a[i] + +b[i] + remainder) {
      case 3:
        {
          res += 1;
        }
        break;
      case 2:
        {
          res += 0;
          remainder = 1;
        }
        break;
      case 1:
        {
          res += 1;
          remainder = 0;
        }
        break;
      case 0:
        {
          res += 0;
        }
        break;
    }
  }
  if (remainder) res += 1;
  console.log(res.split("").reverse().join(""));
};
// addBinary("1010", "1011");
// addBinary("11", "1");

/**
 * 6. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const newS = s
    .toLowerCase()
    .split("")
    .filter((el) => el.match(/[a-z]|[0-9]/))
    .join("");
  for (let i = 0; i < newS.length / 2; i++) {
    if (newS[i] !== newS[newS.length - 1 - i]) return false;
  }
  return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("0P"));

/**
 * 7. Excel Sheet Column Title
 * https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = [];
  while (columnNumber > 0) {
    res.unshift(
      String.fromCharCode("A".charCodeAt(0) + ((columnNumber - 1) % 26))
    );
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  console.log(res.join(""));
};
// convertToTitle(28);
// convertToTitle(701);
// convertToTitle(26);
// convertToTitle(2);

/**
 * 8. Jump Tiles, interview question: Nimesa Technologies
 * @param {*} nums
 * @returns
 */
function can_reach_end(nums) {
  if (nums.length === 1) {
    return true;
  }
  let i = 0;
  for (i; i < nums.length; i++) {
    i = nums[i];
    if (i === 0) {
      return false;
    }
  }
  if (i >= nums.length) {
    return true;
  }
}

// console.log(can_reach_end([0]))
// console.log(can_reach_end([5, 0, 0, 0]));
// console.log(can_reach_end([1, 2, 3]));

/**
 * 9. Delete to make similar words, interview question: Nimesa Technologies
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
function deletion_distance(str1, str2) {
  let map = new Map();
  let res = 0;
  for (let i = 0; i < str1.length; i++) {
    if (!map.has(str1[i])) map.set(str1[i], true);
  }
  for (let i = 0; i < str2.length; i++) {
    if (map.has(str2[i])) res++;
  }
  const op = str1.length - res + str2.length - res;
  return op;
}
// console.log(deletion_distance("at", "cat"));
// console.log(deletion_distance("boat", "got"));

/**
 * 10. Excel Sheet Column Number
 * https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} columnTitle
 * @return {number}
 * console.log(Math.pow(2, 0)) //1; ==> number raised to power 0 is 1.
 */
var titleToNumber = function (columnTitle) {
  let res = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    res +=
      (columnTitle[i].charCodeAt(0) - 64) *
      Math.pow(26, columnTitle.length - 1 - i);
  }
  console.log(res);
};
// titleToNumber("ZY");
// titleToNumber("FXSHRXW");
// titleToNumber("AAA");
// console.log(Math.pow(2, 0)); // number raised to power 0  = 1

/**
 * 11. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = new Map();
  let feed = [];
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i]) && !feed.includes(t[i])) {
      map.set(s[i], t[i]);
      feed.push(t[i]);
    }
  }
  console.log(map);
  for (let i = 0; i < t.length; i++) {
    console.log(map.get(s[i]), t[i]);
    if (map.get(s[i]) !== t[i]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
};
// isIsomorphic("egg", "add");
// isIsomorphic("foo", "bar");
// isIsomorphic("badc", "baba");

/**
 * 12. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  function alpha(str) {
    return str.split("").sort().join("");
  }
  console.log(alpha(s) === alpha(t));
};
// isAnagram("anagram", "nagaram");

function isAnagramII(s, t) {
  let obj = {};
  for (let i of s) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  for (let i of t) {
    if (obj[i]) {
      if (obj[i] === 0) return false;
      obj[i] = obj[i] - 1;
    } else {
      return false;
    }
  }
  console.log(Object.values(obj).every((el) => el === 0));
}
// isAnagramII("anagram", "nagaram");
// isAnagramII("ab", "a");

// 13. solve using array of size 26 and charCodeAt
function isAnagramIII(s, t) {
  let charArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charArr[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    charArr[t.charCodeAt(i) - 97]--;
  }
  console.log(charArr.every((el) => el === 0));
}
// isAnagramIII("rat", "car");

/**
 * 14. Binary Tree Paths
 * https://leetcode.com/problems/binary-tree-paths/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
  if (!root) return [];
  let result = [];

  function dfs(node, currentPath) {
    currentPath += node.val;
    if (!node.left && !node.right) {
      result.push(currentPath);
    }
    if (node.left) {
      dfs(node.left, currentPath + "->");
    }
    if (node.right) {
      dfs(node.right, currentPath + "->");
    }
  }
  dfs(root, "");
  console.log(result);
};
// binaryTreePaths([1, 2, 3, null, 5]);

/**
 * 15. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  if (pattern.length !== sArr.length) return false;
  let map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      if ([...map.values()].includes(sArr[i])) console.log(false);
      map.set(pattern[i], sArr[i]);
    } else {
      if (map.get(pattern[i]) !== sArr[i]) console.log(false);
    }
  }
  console.log(true);
};
// wordPattern("abba", "dog cat cat dog");
// wordPattern("abba", "dog cat cat fish");
// wordPattern("abba", "dog dog dog dog");

// 16. Fast approach Word pattern
function wordPatternII(pattern, s) {
  const sArr = s.split(" ");
  if (pattern.length !== sArr.length) return false;

  let patternMap = new Map();
  let stringMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.has(pattern[i])) patternMap.set(pattern[i], sArr[i]);
    if (!stringMap.has(sArr[i])) stringMap.set(sArr[i], pattern[i]);

    if (pattern[i] !== stringMap.get(sArr[i])) return false;
    if (patternMap.get(pattern[i]) !== sArr[i]) return false;
  }
  return true;
}
// console.log(wordPatternII("abba", "dog dog dog dog"));
// console.log(wordPatternII("abba", "dog cat cat dog"));
// console.log(wordPatternII("abba", "dog cat cat fish"));

/**
 * 17. Reverse String
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    const rev = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = rev;
  }
  console.log(s);
};
// reverseString(["h", "e", "l", "l", "o"]); // ['o', 'l', 'l', 'e', 'h']
// reverseString(["H", "a", "n", "n", "a", "h"]);

// 18. Reverse String using While
function reverseStringWhile(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const t = s[l];
    s[l] = s[r];
    s[r] = t;
    l++;
    r--;
  }
  console.log(s);
}
reverseStringWhile(["h", "e", "l", "l", "o"]);
// ['o', 'l', 'l', 'e', 'h']
reverseStringWhile(["H", "a", "n", "n", "a", "h"]);

/**
🚨 Must Solve String Questions:
13. Roman to Integer -
14. Longest Common Prefix -
20. Valid Parentheses -
125. Valid Palindrome -
171. Excel Sheet Column Number -
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
