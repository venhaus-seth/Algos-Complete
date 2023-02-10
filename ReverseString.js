var reverseString = function(s) {
    for (let i = 0, j = s.length - 1; i < Math.floor(s.length/2); i++, j--) {
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    return s
};

s = ["h","e","l","l","o"]
t = ["H","a","n","n","a","h"]
console.log(reverseString(s))
console.log(reverseString(t))