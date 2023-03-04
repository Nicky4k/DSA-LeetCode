/**
 1. Two Sum
 */
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], i);
  }
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) && i !== map.get(target - nums[i])) {
      console.log(i, map.get(target - nums[i]));
      return;
    }
  }
}
// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);

//2. Best Time to Buy and Sell Stock
function maxProfit(prices) {
  let maxProf = 0;
  currentMin = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (currentMin > prices[i]) currentMin = prices[i];
    if (maxProf < prices[i] - currentMin) maxProf = prices[i] - currentMin;
  }
  console.log(maxProf);
}
// maxProfit([7, 1, 5, 3, 6, 4]);

// 3. Contains Duplicate
function containsDuplicate(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], 1);
    }
  }
  return false;
}
// containsDuplicate([1, 2, 3, 4]);

/**
 // 4.Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let zeroIdx;
  if (nums.indexOf(0) === nums.lastIndexOf(0)) zeroIdx = nums.indexOf(0);
  const prod = nums.reduce((acc, curr) => acc * curr, 1);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === zeroIdx) {
      let op = nums.reduce(
        (acc, curr, i) => (i === zeroIdx ? acc : acc * curr),
        1
      );
      res.push(op);
    } else {
      if (nums[i] !== 0) {
        res.push(prod / nums[i]);
      } else {
        res.push(0);
      }
    }
  }
  return res;
};
// productExceptSelf([1, 2, 3, 4]);
// productExceptSelf([-1, 1, 0, -3, 3]);
// productExceptSelf([0, 0]);

/**
 * 5. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length;
  let maxSum = nums[0];
  let currSum = 0;
  for (let i = 0; i < n; i++) {
    currSum = Math.max(0, currSum) + nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  console.log(maxSum);
};
// maxSubArray([5, 4, -1, 7, 8]);
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

/**
 * Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      break;
    }
  }
  return min;
};
// findMin([3, 4, 5, 1, 2]);

/**
 * 3Sum
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //TLE
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const twoSum = nums[i] + nums[j];
      if (
        map.has(-1 * twoSum) &&
        map.get(-1 * twoSum) !== i &&
        map.get(-1 * twoSum) !== j
      ) {
        if (
          !res.includes(
            [nums[i], nums[j], twoSum === 0 ? 0 : -1 * twoSum].sort(
              (a, b) => a - b
            )
          )
        ) {
          res.push(
            [nums[i], nums[j], twoSum === 0 ? 0 : -1 * twoSum].sort(
              (a, b) => a - b
            )
          );
        }
      }
    }
  }
  let strRes = res.map(JSON.stringify);
  const setRes = new Set(strRes);
  console.log(
    [...setRes.values()].map((set) =>
      set
        .slice(1, -1)
        .split(",")
        .map((el) => el * 1)
    )
  );
};
// threeSum([-1, 0, 1, 2, -1, -4]);

const optimal3Sum = (nums) => {
  let res = [];
  if (nums.length < 3) return res;
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) break;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      } else if (sum < 0) {
        start++;
      } else if (sum > 0) {
        end--;
      }
    }
  }
  console.log(res);
};
// optimal3Sum([-1, 0, 1, 2, -1, -4]);

/**
 * 
🚨 Array
1. Two Sum
2. Best Time to Buy and Sell Stock
3. Contains Duplicate
4. Product of Array Except Self
5. Maximum Subarray ❌
6. Maximum Product Subarray ❌
7. Find Minimum in Rotated Sorted Array
8. Search in Rotated Sorted Array
9. 3 Sum
10. Container With Most Water

🚨 Binary
Sum of Two Integers
Number of 1 Bits
Counting Bits
Missing Number
Reverse Bits

🚨 Dynamic Programming
Climbing Stairs
Coin Change
Longest Increasing Subsequence
Longest Common Subsequence
Word Break Problem
Combination Sum
House Robber
House Robber II
Decode Ways
Unique Paths
Jump Game

🚨 Graph
Clone Graph
Course Schedule
Pacific Atlantic Water Flow
Number of Islands
Longest Consecutive Sequence
Alien Dictionary (Leetcode Premium)
Graph Valid Tree (Leetcode Premium)
Number of Connected Components in an Undirected Graph (Leetcode Premium)

🚨 Interval
Insert Interval
Merge Intervals
Non-overlapping Intervals
Meeting Rooms (Leetcode Premium)
Meeting Rooms II (Leetcode Premium)

🚨 Linked List
Reverse a Linked List
Detect Cycle in a Linked List
Merge Two Sorted Lists
Merge K Sorted Lists
Remove Nth Node From End Of List
Reorder List

🚨 Matrix
Set Matrix Zeroes
Spiral Matrix
Rotate Image
Word Search

🚨 String
Longest Substring Without Repeating Characters
Longest Repeating Character Replacement
Minimum Window Substring
Valid Anagram
Group Anagrams
Valid Parentheses
Valid Palindrome
Longest Palindromic Substring
Palindromic Substrings
Encode and Decode Strings (Leetcode Premium)

🚨 Tree
Maximum Depth of Binary Tree
Same Tree
Invert/Flip Binary Tree
Binary Tree Maximum Path Sum
Binary Tree Level Order Traversal
Serialize and Deserialize Binary Tree
Subtree of Another Tree
Construct Binary Tree from Preorder and Inorder Traversal
Validate Binary Search Tree
Kth Smallest Element in a BST
Lowest Common Ancestor of BST
Implement Trie (Prefix Tree)
Add and Search Word
Word Search II

🚨 Heap
Merge K Sorted Lists
Top K Frequent Elements
Find Median from Data Stream
 */
