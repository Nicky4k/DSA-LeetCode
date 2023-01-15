/**
 * 1. Binary Tree Preorder Traversal
 */

function preorderTraversal() {}
// preorderTraversal();

/**
 * 2. Two Sum
 * https://leetcode.com/problems/two-sum/
 * @param {*} nums
 * @param {*} target
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.includes(target - nums[i]) &&
      nums.indexOf(target - nums[i]) !== i
    ) {
      console.log(i, nums.indexOf(target - nums[i]));
      return;
    }
  }
}
// twoSum([3, 2, 1, 5, 5, 6, 0, 4], 6);

function mapTwoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }

  console.log(map);
}
// console.log(mapTwoSum([2, 7, 11, 15], 9));

/**
 * 3. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
const arr = [1, 2, 2];
function removeDupsDromSortedArray(nums) {
  let sticky = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      sticky++;
      nums[sticky] = nums[i + 1];
    }
  }
  nums.length = sticky + 1;
  console.log(nums);
}
// removeDupsDromSortedArray(arr);

/**
 * 4. Remove Element
 * https://leetcode.com/problems/remove-element/
 */
function removeElement(nums, val) {
  let sticky = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[sticky] !== val) {
      sticky++;
    } else {
      for (let j = sticky; j <= nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
    }
  }
  nums.length = sticky;
  console.log(sticky, nums);
}
// removeElement([3, 2, 2, 4, 3], 3);

/**
 * 5. Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 */
function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[nums.length - 1] < target) {
      console.log(nums.length);
      return;
    }
    if (nums[i] === target) {
      console.log(i);
      return;
    }
    if (nums[i] > target) {
      console.log(i);
      return;
    }
  }
}
// searchInsert([1, 3, 5, 6], 5);
// searchInsert([1, 3, 5, 6], 20);
// searchInsert([-1, 3, 5, 6], 0);

function binarySearchInsert(nums, target) {
  let low = 0;
  let high = nums.length;
  let mid;
  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  console.log(low);
}
// binarySearchInsert([1, 3, 5, 7], -20);

/**
 * 6. Plus One
 * https://leetcode.com/problems/plus-one/
 */
function plusOne(digits) {
  const end = digits.length - 1;
  let remainder = true;
  for (let i = end; i >= 0; i--) {
    if (!remainder) break;
    if (digits[i] === 9) {
      digits[i] = 0;
      remainder = true;
    } else {
      digits[i]++;
      remainder = false;
    }
  }
  if (digits[0] === 0) {
    digits = [1, ...digits];
  }
  console.log(digits);
}
// plusOne([1, 2, 9, 3, 4, 9]);
// plusOne([9]);

/**
 * Using Big Int and Javascript inbuilt functions
 */
function bigInt(digits) {
  var plusOne = function (digits) {
    const arr = [...(BigInt(digits.join("")) + BigInt(1)).toString()];
    return arr.map(Number);
  };
  plusOne(digits);
}
// console.log(bigInt([1, 2, 9, 3, 4, 9]));

/**
 * 7. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/description/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      i--;
      first--;
    } else {
      nums1[i] = nums2[second];
      i--;
      second--;
    }
  }
  console.log(nums1);
}
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1, 0], 1, [2], 1);
// merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);

// Merge Sorted Array in: 2 Lines of code
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};

/**
 * 8. Convert Sorted Array to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);

  return root;
};

// sortedArrayToBST([-10, -3, 0, 5, 9]);
// sortedArrayToBST([1, 3]);

/**
 * 9. Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows, i = 1, res = [[1]]) {
  if (numRows === i) return res;
  let temp = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      temp[j] = 1;
    } else {
      temp[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  res.push(temp);
  return generate(numRows, ++i, res);
};

// console.log(generate(10));

/**
 * 10. Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

var getRow = function (rowIndex) {
  let res = [1];
  let temp = [];
  for (let i = 0; i <= rowIndex; i++) {
    temp = [];
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp[j] = 1;
      } else {
        temp[j] = res[j - 1] + res[j];
      }
    }
    res = temp;
  }
  return res;
};
// console.log(getRow(3));

/**
 * 11. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
    if (prices[i] < minPrice) minPrice = prices[i];
  }
  return maxProfit;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/**
 * 12. Single Number
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) return key;
  }
};
// console.log(singleNumber([4, 1, 2, 1, 2]));

/**
 * 13. Majority Element
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1;
  }

  let res = 0;
  let max = 0;
  for (let key in obj) {
    if (obj[key] > max) {
      res = key;
      max = obj[key];
    }
  }
  console.log(res);
};

// majorityElement([3, 3]);
// majorityElement([2, 2, 99, 99, 99, 2, 2]);

/**
 * 14. Check for Majority Element in a sorted array
 * https://www.geeksforgeeks.org/check-for-majority-element-in-a-sorted-array/
 */
function majoritySortedArr(arr) {
  let count = 1;
  let element = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
      if (count > arr.length / 2) {
        console.log(element);
        return;
      }
    } else {
      element = arr[i];
      count = 1;
    }
  }
}
// majoritySortedArr([1, 2, 2, 2, 2, 3, 10]);

/**
 * 15. Find Min and Max in array using Reduce
 */

function minMax(arr) {
  const res = arr.reduce(
    (acc, curr, i, arr) => {
      acc.min = acc.min < curr ? acc.min : curr;
      acc.max = acc.max > curr ? acc.max : curr;
      return acc;
    },
    { min: arr[0], max: arr[0] }
  );
  console.log(res);
}
minMax([2, 4, 6, 8]); //{min: 2, max: 8}
