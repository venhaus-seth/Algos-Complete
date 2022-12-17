
function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++) {
        for (var j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j])
        }
    }
    return flat;
}

var array = [[1, 3, 4], [2, 7], [99, 4, 21, 4], [1, 2, 5]]

console.log(flatten(array))