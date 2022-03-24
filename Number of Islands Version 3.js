//Number of Islands Short Solution

//QUESTIONS: Are the edges of the 2D array water? How do you make sure you are not double counting 1's?

//TEST CASE CONSIDERATIONS: Test to make sure diagonal islands dont count, test an empty outer array, test with empty sub arrays etc.

//Time Complexity:
//Space Complexity:

const numIslands = (grid) => {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          count++
          turnZero(i, j, grid)
        }
      }
    }
    return count
  }
  function turnZero(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 
         || j >= grid[0].length || grid[i][j] === '0') return
    grid[i][j] = '0'
    turnZero(i, j + 1, grid)
    turnZero(i, j - 1, grid)
    turnZero(i + 1, j, grid)
    turnZero(i - 1, j, grid)
  }