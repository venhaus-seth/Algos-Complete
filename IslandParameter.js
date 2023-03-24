var islandPerimeter = function(grid) {
    if (grid.length === 1 && grid[0].length === 1){
        return grid[0][0] === 1 ? 4 : 0
    }

    count = 0
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 0) continue

            if (j === 0) count++;
            else if (grid[i][j-1] === 0) count++; 

            if (j === grid[0].length-1) count++; 
            else if (grid[i][j+1] === 0) count++; 

            if (i === 0) count++; 
            else if (grid[i-1][j] === 0) count ++

            if (i === grid.length-1) count++; 
            else if (grid[i+1][j] === 0) count++
        }
    }
    return count
};

grid1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
grid2 = [[1]]
grid3 = [[1,0]]
console.log(islandPerimeter(grid1))
console.log(islandPerimeter(grid2))
console.log(islandPerimeter(grid3))