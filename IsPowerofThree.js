var isPowerOfThree = function(n) {

    while (n > 1) {
        if (n % 3 === 0) n /= 3
        else break
    }
    return n === 1
};

n = 27
m = 0
o = -1
p = 28
console.log(isPowerOfThree(n))
console.log(isPowerOfThree(m))
console.log(isPowerOfThree(o))
console.log(isPowerOfThree(p))