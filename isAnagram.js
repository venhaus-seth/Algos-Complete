var isAnagram = function(s, t) {
    let S = [...s]
    let T = [...t]
 
    for (let i = 0; i < S.length; i++) {

        innerloop:
        for (let j = 0; j < T.length; j++) {
            if (S[i] === T[j]) {
                T.splice(j,1)
                break innerloop
            }
        }
    }
    
    return T.length === 0 ? true : false
};

s = "anagram"
t = "nagaram"
console.log(isAnagram(s,t))