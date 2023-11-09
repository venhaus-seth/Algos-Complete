def removeDuplicates(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        j = 1
        for i in range(1,len(nums)):
            # print(nums)
            
            if nums[i]!= nums[i-1]:
                nums[j] = nums[i]
                j+=1

            print(nums)
        return j   

x = [1,1,2,2, 3]
print(removeDuplicates(x))
