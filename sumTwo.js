const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

function twoSumTwo(nums, targetSum) {
    const numbers = {};
    for (let i=0; i<nums.length; i++) {
        let checkNum = targetSum - nums[i];
        if (checkNum in numbers) {
            return [numbers[checkNum], i]
        } else {
            numbers[nums[i]] = i; 
        }
    }
}

console.log(twoSumTwo(nums1, targetSum1))
console.log(twoSumTwo(nums2, targetSum2))
console.log(twoSumTwo(nums3, targetSum3))