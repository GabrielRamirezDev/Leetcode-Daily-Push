//Number of Islands DFS Version

//QUESTIONS: Are the edges of the 2D array water? How do you make sure you are not double counting 1's?

//TEST CASE CONSIDERATIONS: Test to make sure diagonal islands dont count, test an empty outer array, test with empty sub arrays etc.

//Time Complexity: o( m x n)
//Space Complexity: o(m x n) stack can end up holding the entire grid because the first call waits for the last call to finish

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const dfs = function(grid, currentRow, currentCol) {
    if(currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) return;
  
    if(grid[currentRow][currentCol] === 1) {
      grid[currentRow][currentCol] = 0;
  
      for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const row = currentDir[0];
        const col = currentDir[1];
        dfs(grid, currentRow + row, currentCol + col);
      }
    }
  }
  
  const numberOfIslands = function(grid) {
    if(!grid.length) return 0;
    
    let islandCount = 0;
    
    for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
        if(grid[row][col] === 1) {
          islandCount++;
          dfs(grid, row, col);
        }
      }
    }
    
    return islandCount;
  };