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
productExceptSelf([1, 2, 3, 4]);
productExceptSelf([-1, 1, 0, -3, 3]);
productExceptSelf([0, 0]);
/**
 * 
🚨 Array
1. Two Sum
2. Best Time to Buy and Sell Stock
3. Contains Duplicate
4. Product of Array Except Self
5. Maximum Subarray
6. Maximum Product Subarray
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
