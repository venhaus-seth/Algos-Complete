var getRow = function(rowIndex) {

    if (rowIndex === 0) return [1]
    let output = [[1]]
    
    for (let i = 1; i < rowIndex + 1; i++) {
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
    return output[output.length - 1]
    
};

n = 1
m = 5
o = 10
console.log(getRow(n))
console.log(getRow(m))
console.log(getRow(o))