def romanToInt(S):
    dict = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    result = 0
    for i in range(len(S)):
        if i < len(S) - 1:
            if dict[S[i]] < dict[S[i+1]]:
                result -= dict[S[i]]
            else:
                result += dict[S[i]]
        if i == len(S) - 1:
            result += dict[S[i]]
    return result

x = "CVX"
y = "LVIII"
z = "MCMXCIV"
print(romanToInt(x))
print(romanToInt(y))
print(romanToInt(z))