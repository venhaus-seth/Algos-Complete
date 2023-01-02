var climbStairs = function(n) {
    let a=1, b=2, next

    for (let i = 3; i <= n; i++) {
        next = a+b
        a = b
        b = next
    }

    return n === 1 ? a : b
};

n = 2
m = 3
o = 4
console.log(climbStairs(n))
console.log(climbStairs(m))
console.log(climbStairs(o))