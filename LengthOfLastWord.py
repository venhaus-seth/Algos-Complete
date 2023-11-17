def lengthOfLastWord(s):

    while s[len(s)-1] == " ":
        s = s[0:(len(s)-1)]
    
    returnInt = 0

    for i in reversed(s):  
        if i == " ":
            break
        else:
            returnInt += 1

    return returnInt






s = "Hello World"
t = "   fly me   to   the moon  "
u = "luffy is still joyboy"
print(lengthOfLastWord(s))
print(lengthOfLastWord(t))
print(lengthOfLastWord(u))
