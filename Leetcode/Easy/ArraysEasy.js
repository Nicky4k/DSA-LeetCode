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
// const arr = [1, 2, 2];
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
// minMax([2, 4, 6, 8]);

/**
 * 16. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums, j = nums.length) {
  let obj = {};
  for (let i = 0; i < j; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return false;
};

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));

// 17. using lastIndexOf
function dupesIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.lastIndexOf(arr[i])) {
      return true;
    }
  }
  return false;
}

// console.log(dupesIndex([1, 2, 3, 1]));
// console.log(dupesIndex([1, 2, 3, 4]));

/**
 * 18. Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
};
// containsNearbyDuplicate([1, 2, 3, 1], 3);
// console.log(containsNearbyDuplicate([1, 2, 1, 3, 1, 2, 3], 2));

/**
 * 19. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 *  Input: nums = [0,1,2,4,5,7]
    Output: ["0->2","4->5","7"]
    Explanation: The ranges are:
    [0,2] --> "0->2"
    [4,5] --> "4->5"
    [7,7] --> "7"
 */
var summaryRanges = function (nums) {
  let string = [];
  let slug = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      slug.push(nums[i]);
    } else {
      if (slug.length > 0) {
        slug.push(nums[i]);
        string.push(slug[0] + "->" + slug[slug.length - 1]);
        slug.length = 0;
      } else {
        string.push(nums[i] + "");
      }
    }
  }
  console.log(string);
};
// summaryRanges([0, 2, 3, 4, 6, 8, 9]);

/**
 * 20. Missing Number
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
};
// missingNumber([3, 0, 1]);

function missingNumberObj(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) return i;
  }
}
// missingNumberObj([3, 0, 1]);

/**
 * 21. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let sticky = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[sticky] = nums[i];
      sticky++;
    }
  }
  for (i = sticky; i < nums.length; i++) {
    nums[i] = 0;
  }
};
moveZeroes([0, 1, 0, 3, 12]);

/**
 * 22. Range Sum Query - Immutable
 * https://leetcode.com/problems/range-sum-query-immutable/
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.preSum = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.preSum[i] = sum;
    }
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (arr) {
  [left, right] = arr;
  return left < 1
    ? this.preSum[right]
    : this.preSum[right] - this.preSum[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
const newNums = new NumArray([1, 2, 3, 4, 5, 6]);
// newNums.sumRange([0, 2]);
// newNums.sumRange([0, 5]);
//, [0, 2], [2, 5], [0, 5]

/**
 * 23.Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) map.set(nums1[i]);
  }
  let mapRes = new Map();
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) mapRes.set(nums2[i]);
  }
  console.log(Array.from(mapRes.keys()));
};
// intersection([1, 2, 2, 1], [2, 2]);

/**
 * 24. Intersection of Two Arrays II
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    map.has(nums1[i])
      ? map.set(nums1[i], map.get(nums1[i]) + 1)
      : map.set(nums1[i], 1);
  }

  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i])) {
      map.set(nums2[i], map.get(nums2[i]) - 1);
      res.push(nums2[i]);
    }
  }
  console.log(res);
};

// intersect([1, 2, 2, 1], [2, 2]);
// intersect([4, 9, 5], [9, 4, 9, 8, 4]);

/**
 * 25. Third Maximum Number
 * https://leetcode.com/problems/third-maximum-number/
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not   exist, return the maximum number.
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? ++obj[nums[i]] : (obj[nums[i]] = 1);
  }
  let arr = Object.keys(obj);
  let newArr = arr.map((el) => +el);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < newArr.length - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  const res =
    newArr.length > 2 ? newArr[newArr.length - 3] : newArr[newArr.length - 1];
  console.log(res);
};
// thirdMax([3, 2, 1]);
// thirdMax([1, 2]);
// thirdMax([2, 2, 3, 1]);
// thirdMax([-2147483648, 1, 1]);
// thirdMax([
//   3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
//   5, 6,
// ]);

function thirdMax2ndSolution(nums) {
  let sortedNums = nums.sort((a, b) => b - a);
  let set = new Set(sortedNums);
  let result = [];
  set.forEach((val) => result.push(val));
  console.log(result.length > 2 ? result[2] : result[0]);
}
// thirdMax2ndSolution([2, 2, 3, 1]);
// thirdMax2ndSolution([3, 2, 1]);
// thirdMax2ndSolution([2, 1]);
// thirdMax2ndSolution([-2147483648, 1, 1]);
// thirdMax2ndSolution([
//   3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
//   5, 6,
// ]);

/**
 * 26. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], true);
  }
  let res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) res.push(i);
  }
  return res;
};
// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

var findDisappearedNumbers2 = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) res.push(i + 1);
  }
  return res;
};
// console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1]));

var findDisappearedNumbers3 = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const pointer = Math.abs(nums[i]) - 1;
    if (nums[pointer] > 0) nums[pointer] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
};
// console.log(findDisappearedNumbers3([4, 3, 2, 7, 8, 2, 3, 1]));

/**
 * 27. Assign Cookies
 * https://leetcode.com/problems/assign-cookies/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  // console.log(g);
  // console.log(s);
  let curr = 0;
  let res = 0;
  for (let i = 0; i < g.length; i++) {
    if (curr < s.length && g[i] <= s[curr]) {
      res++;
      curr++;
    }
  }
  return res;
};
// console.log(findContentChildren([1, 2], [1, 2, 3]));

/**
 * 28. Island Perimeter
 * https://leetcode.com/problems/island-perimeter/
 * @param {number[][]} grid
 * @return {number}
 * 
 * Input: grid = [[1,0]]
   Output: 4
 */
var islandPerimeter = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) continue;
      res += 4;
      if (grid[i - 1]?.[j]) res -= 1;
      if (grid[i + 1]?.[j]) res -= 1;
      if (grid[i]?.[j - 1]) res -= 1;
      if (grid[i]?.[j + 1]) res -= 1;
    }
  }
  return res;
};
// console.log(islandPerimeter([[0, 1]]));
// console.log(
//   islandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// );

/**
 * 29. Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > maxCount) maxCount = count;
  }
  console.log(maxCount);
};

// findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1]);

/**
 * 30. Teemo Attacking
 * https://leetcode.com/problems/teemo-attacking/
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let jacked = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    jacked +=
      timeSeries[i + 1] - timeSeries[i] < duration
        ? timeSeries[i + 1] - timeSeries[i]
        : duration;
  }
  console.log(jacked);
};
// findPoisonedDuration([1, 4], 2);
// findPoisonedDuration([1, 2, 3, 4, 5], 5);

/**
 * 31. Next Greater Element I
 * https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let temp = 0;
    for (j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        temp = nums2[j];
        break;
      }
    }
    res.push(temp ? temp : -1);
  }
  console.log(res);
};
// nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);

var nextGreaterElementStacked = function (nums1, nums2) {
  let map = new Map();
  let stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      map.set(nums2[i], -1);
      stack.push(nums2[i]);
    } else {
      map.set(nums2[i], stack[stack.length - 1]);
      stack.push(nums2[i]);
    }
  }
  stack = [];
  for (let i = 0; i < nums1.length; i++) {
    stack.push(map.get(nums1[i]));
  }
  console.log(stack);
};
// nextGreaterElementStacked([4, 1, 2], [1, 3, 4, 2]);

/**
 * 32. Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const keyboard = {
    1: "qwertyuiop",
    2: "asdfghjkl",
    3: "zxcvbnm",
  };
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j < 4; j++) {
      if (keyboard[j].includes(words[i].toLowerCase().split("")[0])) {
        const filteredWd = words[i]
          .toLowerCase()
          .split("")
          .filter((wd) => keyboard[j].includes(wd));
        if (words[i].length === filteredWd.length) {
          res.push(words[i]);
          break;
        }
      }
    }
  }
  console.log(res);
};

// findWords(["Hello", "Alaska", "Dad", "Peace"]);

/**
 * 33. Relative Ranks
 * https://leetcode.com/problems/relative-ranks/
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let map = new Map();
  let skore = [...score];
  for (let i = 0; i < skore.length; i++) {
    for (j = 0; j < skore.length - i; j++) {
      if (skore[j] > skore[j + 1]) {
        let temp = skore[j];
        skore[j] = skore[j + 1];
        skore[j + 1] = temp;
      }
    }
    map.set(skore[skore.length - 1 - i], i + 1);
  }
  let res = [];
  for (let i = 0; i < skore.length; i++) {
    switch (map.get(score[i])) {
      case 1:
        res.push("Gold Medal");

        break;
      case 2:
        res.push("Silver Medal");

        break;
      case 3:
        res.push("Bronze Medal");

        break;

      default:
        res.push(map.get(score[i]));
        break;
    }
  }
  console.log(res);
};
// findRelativeRanks([10, 3, 8, 9, 4]);

/**
 * 34. Array Partition
 * https://leetcode.com/problems/array-partition/
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 2) {
    sum += nums[i];
  }
  console.log(sum);
};
// arrayPairSum([1, 4, 3, 2]);
// arrayPairSum([6214, -2290, 2833, -7908]);

/**
 * 35. Reshape the Matrix
 * https://leetcode.com/problems/reshape-the-matrix/
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let res = mat.flat();

  for (let i = 0; i < mat.length; i++) {
    res.push(...mat[i]);
  }
  if (c * r !== res.length || (c === 1 && r === 1)) {
    console.log(...mat);
    return;
  }

  let op = [];
  for (let i = 0; i < r * c; i += c) {
    op.push(res.slice(i, i + c));
  }
  console.log(...op);
};
// matrixReshape(
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   1,
//   4
// );
// matrixReshape(
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   2,
//   4
// );
// matrixReshape(
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   4,
//   1
// );
// matrixReshape([[1, 2, 3, 4]], 2, 2);
// matrixReshape([[1, 2]], 1, 1);

/**
 * 36. Distribute Candies
 * https://leetcode.com/problems/distribute-candies/
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  console.log(Math.min([...new Set(candyType)].length, candyType.length / 2));
};
distributeCandies([1, 1, 2, 2, 3, 3]);
