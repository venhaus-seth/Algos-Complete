var findComplement = function(num) {
    
    numBinary = num.toString(2)
    returnNum = ""

    for (let char of numBinary) {
        char === "0" ? returnNum += "1" : returnNum += "0"
    }
    returnNum = parseInt(returnNum, 2)
    return returnNum
};

console.log(findComplement(5))
console.log(findComplement(1))
console.log(findComplement(26))
console.log(findComplement(100))