def matchingStrings(stringList, queries):
    # Write your code here
    return_arr = []
    for i in range(0, len(queries)):
        count = 0
        for j in range(0, len(stringList)):
            if queries[i] == stringList[j]:
                count += 1
        return_arr.append(count)
    return return_arr

stringList = ["ab", "ab", "abc"]
queries = ["ab", "abc", "bc"] 
print(matchingStrings(stringList, queries))