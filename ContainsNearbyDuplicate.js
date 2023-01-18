var containsNearbyDuplicate = function(nums, k) {

    if (nums.length === 1) return false

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true
            } 
        }  
    }
    return false
    
};

let nums1 = [1,2,3,1], k = 3
let nums2 = [1,0,1,1], l = 1
let nums3 = [1,2,3,1,2,3], m = 2
console.log(containsNearbyDuplicate(nums1, k))
console.log(containsNearbyDuplicate(nums2, l))
console.log(containsNearbyDuplicate(nums3, m))