def summaryRanges(nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        OutputList = []
        pointer = 0
        while pointer <= len(nums) -1:

            start = nums[pointer]
            while pointer < len(nums) -1 and nums[pointer + 1] == (nums[pointer] + 1):
                pointer += 1
            end = nums[pointer]
            output = f"{start}->{end}"

            if start == end:
                OutputList.append(f"{start}")
            else:
                OutputList.append(output)

            pointer += 1

        return OutputList


nums1 = [0,1,2,4,5,7]
nums2 = [0,2,3,4,6,8,9]
print(summaryRanges(nums1))
print(summaryRanges(nums2))