
const twoSum = (nums, target) => {
    result = []

    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i + 1; j < nums.length ; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i,j)
            }
        }
        
    }
    return result
};


nums = [2,11,15, 7]
target = 9
console.log(twoSum(nums, target))