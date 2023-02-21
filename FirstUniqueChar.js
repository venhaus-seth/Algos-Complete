var firstUniqChar = function(s) {
    let map = {}

    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }
    return -1
};

s = "leetcode"
t = "loveleetcode"
u = "aabb"
console.log(firstUniqChar(s))
console.log(firstUniqChar(t))
console.log(firstUniqChar(u))