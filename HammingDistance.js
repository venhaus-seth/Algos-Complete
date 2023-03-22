var hammingDistance = function(x, y) {
    let xor = (x^y).toString(2)
    distance = 0
    for (let digit of xor.split('')) {
      if (digit === "1") {
        distance++
      }
    }
  
    return distance
  };

let x1 = 1, y1 = 4
let x2 = 3, y2 = 1
console.log(hammingDistance(x1, y1))
console.log(hammingDistance(x2, y2))