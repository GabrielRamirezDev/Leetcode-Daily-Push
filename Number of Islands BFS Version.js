//Number of Islands BFS Version

//QUESTIONS: Are the edges of the 2D array water? How do you make sure you are not double counting 1's?

//TEST CASE CONSIDERATIONS: Test to make sure diagonal islands dont count, test an empty outer array, test with empty sub arrays etc.

//Time Complexity: o(m * n): we can think of this two ways -->
//FIRST APPROACH: our nested for loops are designed to only touch each item once which is o(n) -->
//our BFS is designed to touch each interconnected 1 once before flipping it to a zero -->
//at most we would touch each element once if every element happened to be a 1. This means it will take at most o(n) time
//Two o(n)'s give us o(n + n) AKA o(2n) we drop our constant which gives us o(n)
//SECOND APPROACH: Instead of using o(n) as to describe every element being iterated over inour nested loop traversal  we can also call it o (m * n) -->
// m being equal to the length of the outer array and n being equal to the length of the inner arrays
//the length of each multiplied (AKA m * n) gives us the total number of elements. -->
//this way we can say o(m * n) is a slightly more explicit way of describing the same time complexity of o(n)


//Space Complexity: o(max(m, n)) the biggest our queue will get is the diagonal length of our matrix plus 1 or -->
//the largest value between our row and column/ array and subarray length AKA o(Math.max(m, n))
//this wont always be true depending on the configuration of the matrix

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const numberOfIslands = function(matrix) {
      //if the length of our 2d array is zero then we have no islands
    if(matrix.length === 0) return 0;
    //start our island count as zero
    let islandCount = 0;

    //two for loops to iterate through our matrix in sequential order. 
    //Outer for loop is the row, inner is the column
    for(let row = 0; row < matrix.length; row++) {
      for(let col = 0; col < matrix[0].length; col++) {
        if(matrix[row][col] === 1) {
            //if our element is a 1 increment our island count
          islandCount++;
          //turn that element from a 1 to a zero
          matrix[row][col] = 0;
          //create our queue and push our cordinantes as a sub array
          //always mention you are using an array because javascript doesn't have a native queue 
          //This will affect your queue because array shift() operates in o(n) time where as a linked list based queue would operate in o(1)
          const queue = [];
          queue.push([row, col]);

          //while our queue continues to have a length -->
          //
          while(queue.length) {
              //currentPos is equal to the cordinates at the front of our queue
              //currentRow is equal to our row index and currentCol is equal to our column index
            const currentPos = queue.shift();
            const currentRow = currentPos[0];
            const currentCol = currentPos[1];

            //loop through our directions array and grab the cordinates for each position
            for(let i = 0; i < directions.length; i++) {
              const currentDir = directions[i];
              const nextRow = currentRow + currentDir[0];
              const nextCol = currentCol + currentDir[1];

              //if our cordinate is out of bounds then CONTINUE
              if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue;

              // if the cordinate is a one then add that new set of cordinates to our queue and change it to a zero
              if(matrix[nextRow][nextCol] === 1) {
                queue.push([nextRow, nextCol]);
                matrix[nextRow][nextCol] = 0;
              }
            }
          }
        }
      }
    }
    //return our final island count
    return islandCount;
  }