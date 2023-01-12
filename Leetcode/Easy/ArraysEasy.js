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