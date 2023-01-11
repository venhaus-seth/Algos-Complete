var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    
    const dict = {}
    for (let n of nums) {
        if (dict[n] == null) dict[n] = 0
        dict[n]++
    }
    
    for (let m in dict) {
        if (dict[m] === 1) return Number(m)
    }
};