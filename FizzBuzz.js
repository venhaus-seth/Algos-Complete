var fizzBuzz = function(n) {
    const returnArr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            returnArr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            returnArr.push("Fizz")
        } else if (i % 5 === 0) {
            returnArr.push("Buzz")
        } else returnArr.push("" + i )
    }
    return returnArr
};

x = 3
y = 5
z = 15
console.log(fizzBuzz(x))
console.log(fizzBuzz(y))
console.log(fizzBuzz(z))