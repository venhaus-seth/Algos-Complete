var countBits = function(n) {
    if (n === 0) return [0]

    returnArr = []
    for (let i = 0; i < n + 1; i ++) {
        BinaryNum = i.toString(2)
        tempArr = String(BinaryNum).split('').map((BinaryNum)=> {
            return Number(BinaryNum)
        })
        totalOnes = tempArr.reduce((a,b)=> a + b)
        returnArr.push(totalOnes)
    }
    return returnArr
    
};
n = 2
m = 5
o = 12
console.log(countBits(n))
console.log(countBits(m))
console.log(countBits(o))