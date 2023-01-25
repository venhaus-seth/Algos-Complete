var addDigits = function(num) {
    if (num.length === 1) return num

    function add (total, num) {
        return total + num
    }
    reducedNum = num
    
    while (reducedNum >= 10){
        let arr = Array.from(String(reducedNum), Number)
        let sum = arr.reduce(add)
        reducedNum = sum
    }
    return reducedNum
};

num1 = 38
num2 = 0
num3 = 167
console.log(addDigits(num1))
console.log(addDigits(num2))
console.log(addDigits(num3))