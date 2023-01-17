var containsDuplicate = function(nums) {

    if (nums.length === 1) return false
    let arr = []

    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            return true
        } else {
            arr.push(nums[i])
        }
    }
    return false
};

nums1 = [1,2,3,1]
nums2 = [1,2,3,4]
nums3 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums1))
console.log(containsDuplicate(nums2))
console.log(containsDuplicate(nums3))