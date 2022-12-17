const isPalindrome = function(x) {

    if (x < 0) return false

    x = x.toString()

    for (let i = 0, j = x.length - 1; i < x.length, j > 0; i++, j--) {
        if (x[i] !== x[j]) {
            return false
        }
        if (i === j) break
    }
    return true

};

x1 = 121
x2 = -121
x3 = 10
console.log(isPalindrome(x1))
console.log(isPalindrome(x2))
console.log(isPalindrome(x3))