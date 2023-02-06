var moveZeroes = function(nums) {
    
    let count = 0

    for (let i = 0; i < nums.length - count; i++) {
        if (nums[i] === 0) {
            count++
            nums.splice(i, 1)
            nums.splice((nums.length), 0, 0)
            if (nums[i] === 0) {
                i--
            }
        }
    }
    return nums
};
nums1 = [0,1,0,3,12]
nums2 = [0]
nums3 = [1,0,2,3,0,0,4 ]
nums4 = [1,0,2,3,0,0,4,5,6,7,8,9,0,10,0,0,0,11 ]
console.log(moveZeroes(nums1))
console.log(moveZeroes(nums2))
console.log(moveZeroes(nums3))
console.log(moveZeroes(nums4))