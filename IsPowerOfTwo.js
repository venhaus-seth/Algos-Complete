var isPowerOfTwo = function(n) {

    let i = 0
    
    while (2**i < n) {
        i++
    }

    return 2**i === n
};

n = 1
m = 16
o = 3
console.log(isPowerOfTwo(n))
console.log(isPowerOfTwo(m))
console.log(isPowerOfTwo(o))