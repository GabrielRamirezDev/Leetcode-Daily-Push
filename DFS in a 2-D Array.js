//Depth First Search in a 2-D Array

//QUESTIONS:

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) because we will touch every element in the 2-d array once
//Space Complexity: O(n) beause the seen 2-d array we are storing is the same size as the original

//left value is our outer array index AKA row index, right value is our subarray index AKA column index
const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const traversalDFS = (matrix) => {
      //recreates the 2-d array we are traversing through where each element is instead a false value -->
      // a boolean value tells us if we have already looked at the element in that location
      //if false, we have NOT looked at that value, if true we have already checked that value
      //new Array(matrix.length).fill(0) creates our outer array with 0's as place holder elements
      //.map(() => new Array(matrix[0].length).fill(false)); replaces every zero with a sub array where each element is replaced false/
      //we use matrix[0].length because we are assuming that every subarray is the same length
    const seen = 
      new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    //holds the values that we've explored
    const values = [];

    //calls our dfs function that takes in the original matrix, starts at position (0,0), and takes in our "seen" matrix recration, and values array
    dfs(matrix, 0, 0, seen, values);
  
    //returns the appropriate values
    return values;
  }
  
  const dfs = (matrix, row, col, seen, values) => {

    //our base case to tell our dfs if it should return and stop running
    //if row is less than zero OR greater than the length of the outer array -->
    //...OR column is less than zero or greater than the length of the sub array in question -->
    //...OR the position in our seen matrix is true -->
    //then we return
    if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
    
    //in our seen matrix switch the value from false to true for the cordinates we have just checked
    seen[row][col] = true;
    //push the element we have checked into the values array we are using to capture said elements
    values.push(matrix[row][col]);

    //for each direction in our directions array -->
    for(let i = 0; i < directions.length; i++) {
        //constDir is now equal to the direction
        //each direction will be attempted in the order 
      const currentDir = directions[i];
      dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
    }
  }