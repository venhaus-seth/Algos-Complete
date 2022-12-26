const plusOne = (digits) => {
    let sum = ""

    for (i=0;i<digits.length; i++) {
        sum += digits[i]
        }

    let SumAsNum = Number(sum) + 1

    let toArr = num =>Number(num)
    let expectedArr = Array.from(String(SumAsNum), toArr)

    return expectedArr
};

digits = [1,2,3]
console.log(plusOne(digits))
digits = [4,3,2,1]
console.log(plusOne(digits))