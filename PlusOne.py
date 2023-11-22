def plusOne(digits):

    OriginalNumber = ""

    for i in digits:
        OriginalNumber += str(i)
    NewNumber = int(OriginalNumber) + 1

    returnList = []
    for i in str(NewNumber):
        returnList.append(int(i))
    return returnList



d1 = [1,2,3]
d2 = [4,3,2,1]
d3 = [9]
d4 = [9,8,9,9]
print(plusOne(d1))
print(plusOne(d2))
print(plusOne(d3))
print(plusOne(d4))