var findTheDifference = function(s, t) {
    if (s === "") return t

    for (let char of s) {
        t = t.replace(char, "")
    }

    return t
};

s1 = "abcd"
t1 = "abcde"
s2 = ""
t2 = "a"
s3 = "abcda"
t3 = "abecda"
console.log(findTheDifference(s1,t1))
console.log(findTheDifference(s2,t2))
console.log(findTheDifference(s3,t3))