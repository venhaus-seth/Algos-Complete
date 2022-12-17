const longestCommonPrefix = (strs) => {
    let common = ""

    for ( let i = 0; i < strs[0].length; i++){
        if (strs.every((item) => {
            return strs[0][i] === item[i]
        })) {
            common += strs[0][i]
        } else {
            break
        }
    }
    return common

};

strs1 = ["flower","flow","flight"]
strs2 = ["flower","flow","flowing"]
strs3 = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs2))