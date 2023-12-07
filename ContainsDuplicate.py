def containsDuplicate(nums):
        
        for i in range(len(nums)):

            pointer = i + 1
            while pointer < len(nums):
            
                if nums[pointer] == nums[i]:
                    return True
                else:
                    pointer += 1
                
        return False

nums1 = [1,2,3,1]
nums2 = [1,2,3,4]
nums3 = [1,1,1,3,3,4,3,2,4,2]

print(containsDuplicate(nums1))
print(containsDuplicate(nums2))
print(containsDuplicate(nums3))