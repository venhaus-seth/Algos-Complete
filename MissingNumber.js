var missingNumber = function(nums) {

    for (let i = 0; i <= nums.length; i ++) {
        if (!nums.includes(i)) return i
    }
};
nums1 = [3,0,1]
nums2 = [0,1]
nums3 = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums1))
console.log(missingNumber(nums2))
console.log(missingNumber(nums3))