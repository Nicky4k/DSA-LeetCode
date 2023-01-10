/**
 * 1. Binary Tree Preorder Traversal
 */

function preorderTraversal() {}
preorderTraversal();

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
removeElement([3, 2, 2, 3], 3);
