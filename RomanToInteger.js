const romanToInt = (s) => {
    const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let result = 0
    console.log(s.length)

    for (let j = 0; j < s.length; j++) {
        console.log('forLoop')
        console.log(j)
        if (j < s.length - 1  &&  s[j] === "I" || s[j] === "X" || s[j] === "C") { 
            console.log('firstIf')
            if (dict[s[j]] < dict[s[j + 1]]) {
                result += (dict[s[j + 1]] - dict[s[j]])
                console.log(result)
                console.log('secondIf')
                j++
                continue
            } 
        }
        result += dict[s[j]]
        console.log(result)
    }
    return result
}

console.log(romanToInt('MCMXCIV'))