const sortPeople = (names, heights) => {

    // Second attempt with help
    const finalArray = []
    
    for (let i = 0; i < names.length; i++) {
        finalArray.push([names[i], heights[i]])
    }

    return finalArray.sort((a,b) => b[1]-a[1]).map((a)=>a[0])

    // First attempt:
    // for (let i = 0; i < names.length -1; i++) {
    //     for (let j = i + 1; j < names.length; j++) {
    //         if (heights[i] < heights[j]) {
    //             let tempH = heights[j]
    //             heights[j] = heights[i]
    //             heights[i] = tempH

    //             let tempN = names[j]
    //             names[j] = names[i]
    //             names[i] = tempN  
    //         }
    //     }
    // }
    // return names
};

names1 = ["Mary","John","Emma"]
heights1 = [180,165,170]
names2 = ["Alice","Bob","Bob"]
heights2 = [155,185,150]
names3 = ["Mary","John","Emma","Alice","Bob","Bob"]
heights3 = [180,165,170,155,185,150]

console.log(sortPeople(names1, heights1))
console.log(sortPeople(names2, heights2))
console.log(sortPeople(names3, heights3))