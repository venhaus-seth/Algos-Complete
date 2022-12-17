const lengthOfLastWord = (s) => {
    let count = 0
    
    for ( let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            continue
        } else {
            count++
            if (s[i-1] === null || s[i-1] === " ") {
                break
            }
        }
    }
    return count
};

s = "Hello World"
console.log(lengthOfLastWord(s))