var canConstruct = function(ransomNote, magazine) {
    arrM = [...magazine]
    
    for (let i = 0; i < ransomNote.length; i++) {
        for ( let j = 0; j <= arrM.length; j++) {
            if (!arrM.includes(ransomNote[i])) return false
            if (ransomNote[i] === arrM[j]) {
                arrM.splice(j, 1)
                break
            } 
        }
    }
    return true
};

ransomNote1 = "a", magazine1 = "b"
ransomNote2 = "aa", magazine2 = "ab"
ransomNote3 = "aa", magazine3 = "aab"
ransomNote4 = "abc", magazine4 = "ab"

console.log(canConstruct(ransomNote1,magazine1))
console.log(canConstruct(ransomNote2,magazine2))
console.log(canConstruct(ransomNote3,magazine3))
console.log(canConstruct(ransomNote4,magazine4))