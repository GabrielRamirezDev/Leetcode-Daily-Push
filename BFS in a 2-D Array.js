//Breadth First Search in a 2-D Array

//QUESTIONS:

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) because we have one while loop that touches everything once
//Space Complexity: O(n) beause the seen 2-d array we are storing is the same size as the original, our queue will never grow -->
//to the full size of the 2-d array

// follows the directions like in dfs, each time using the element as a center and explores outward in a ring (same as the directions array)

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const traversalBFS = function(matrix) {
    const seen = 
      new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    //holds the values that we've explored
    const values = [];

    //when using Javascript you should always mention this would be a linked list if you could instead of an array
    //contains your starting location which in this case is our top left corner
    const queue = [[0, 0]];
  
    while(queue.length) {
        //shift the pair of cordinates out of the queue
        //store each index as the seperate variables row and col
      const currentPos = queue.shift();
      const row = currentPos[0];
      const col = currentPos[1];

    //ALMOST the same base case as dfs to tell our code if it should return and stop running
    //if row is less than zero OR greater than the length of the outer array -->
    //...OR column is less than zero or greater than the length of the sub array in question -->
    //...OR the position in our seen matrix is true -->
    //then we CONTINUE aka skip the current iteration
      if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
        continue;
      }
      //in our seen matrix switch the value from false to true for the cordinates we have just checked
      seen[row][col] = true;

      //push the element we have checked into the values array we are using to capture said elements
      values.push(matrix[row][col]);
      //for each direction in our directions array -->
      for(let i = 0; i < directions.length; i++) {
         //constDir is now equal to the direction
        const currentDir = directions[i];
        //push to the queue
        //each direction will be attempted in the order 
        queue.push([row + currentDir[0], col + currentDir[1]]);
      }
    }
  //returns the appropriate values
    return values;
  }