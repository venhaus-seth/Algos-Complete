var findDisappearedNumbers = function(nums) {
    
    let returnArr = []
    for (let i = 1; i < nums.length + 1; i++) {
        if (!nums.includes(i)) {
            returnArr.push(i)
        }
    }
    return returnArr
};
nums1 = [4,3,2,7,8,2,3,1]
nums2 = [1,1]
nums3 = [4,3,2,7,8,2,3,1,9,8,11,4,2]

console.log(findDisappearedNumbers(nums1))
console.log(findDisappearedNumbers(nums2))
console.log(findDisappearedNumbers(nums3))