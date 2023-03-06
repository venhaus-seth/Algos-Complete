var longestPalindrome = function(s) {
    const map = new Map()
    let Count = 0
    let oneOddAdded = false 

    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }
    
    map.forEach((key, value) => {
        console.log(key, value)
        if (value % 2 === 1 && oneOddAdded === false) {
            oneOddAdded = true
            Count += value
        }
        else if(value % 2 === 1) {
            Count += (value - 1)
        }
        else {
            Count += value
        }
        console.log(Count)
    })
    console.log(map)
    return Count
};

s1 = "abccccdd"
s2 = "a"

console.log(longestPalindrome(s1))
console.log(longestPalindrome(s2))