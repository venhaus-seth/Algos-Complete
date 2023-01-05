var generate = function(numRows) {
    if (numRows === 1) return [[1]]
    let output = [[1]]
    for (let i = 1; i < numRows; i++) {
        let tempArr = []
        for (let j = 0; j <= i; j++) {
            if (j=== 0 || j === i) {
                tempArr.push(1)
            } else {
                tempArr.push(output[i-1][j-1] + output[i-1][j])
            }
        }
        output.push(tempArr)
    }
    return output
};

n = 1
m = 5
o = 10
console.log(generate(n))
console.log(generate(m))
console.log(generate(o))