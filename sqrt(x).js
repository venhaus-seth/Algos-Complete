const mySqrt = (x) => {
    let count = 1
    while (count * count <= x) {count++}
    return count -1
};

x=4
y=8
z=9
z2=65
console.log(mySqrt(x))
console.log(mySqrt(y))
console.log(mySqrt(z))
console.log(mySqrt(z2))