function recursiveSigma(num) {
    //base
    num = Math.floor(num)
    if (num < 0) {
        return 0
    }
    //recursive
    return recursiveSigma(num-1) + num
}

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

console.log(recursiveSigma(two_num1))
console.log(recursiveSigma(two_num2))
console.log(recursiveSigma(two_num3))