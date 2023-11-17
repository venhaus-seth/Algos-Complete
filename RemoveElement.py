def removeElement(nums, val):
        ValCount = 0
        for i in range(len(nums)):
            if nums[i] == val:
                nums[i] = "_"
                ValCount += 1

        print(nums)
        return len(nums) - ValCount


nums1 = [3,2,2,3]
val1 = 3
nums2 = [0,1,2,2,3,0,4,2]
val2 = 2
print(removeElement(nums1, val1))
print(removeElement(nums2, val2))