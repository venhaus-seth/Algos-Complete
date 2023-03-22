var findContentChildren = function(g, s) {
    let count = 0
    
    for (let i=0, j=0; i < g.length; i++) {
        if (s[j] >= g[i]) {
            count++
            j++
        }
        else if (s[j] < g[i]) {
        }
    }
    return count
}
g1 = [10,9,8,7]
s1 = [5,6,7,8]
g2 = [1,2]
s2 = [1,2,3]
console.log(findContentChildren(g1,s1))
console.log(findContentChildren(g2,s2))