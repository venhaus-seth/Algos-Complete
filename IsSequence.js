var isSubsequence = function(s, t) {
    let i=0,j=0
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }
    return i === s.length ? true : false
};

s1 = "abc"
t1 = "ahbgdc"
s2 = "axc"
t2 = "ahbgdc"
s3 = "axcdef"
t3 = "axbgcsdwwesdf"
console.log(isSubsequence(s1,t1))
console.log(isSubsequence(s2,t2))
console.log(isSubsequence(s3,t3))