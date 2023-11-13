def searchInsert(nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        for i in range(len(nums)):
            # print(f"Start : {i}")
            if nums[i] >= target:
                return i
        rVal = len(nums)
        return rVal
            
x = [1,3,5,6] 
t1 = 5
t2 = 2
t3 = 7
print(searchInsert(x, t1))
print(searchInsert(x, t2))
print(searchInsert(x, t3))