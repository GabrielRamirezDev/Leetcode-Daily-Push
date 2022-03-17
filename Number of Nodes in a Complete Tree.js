//Number of Nodes in a Complete Tree

//QUESTIONS: What if we get an empty tree?

//TEST CASE CONSIDERATIONS: Trees where the bottom level is completely full, has only one value, and is not completely full but has more than one value

//Time Complexity
//Space Complexity


//True goal is to get a time complexity lower than O(n) since this can be accomplished with both BFS and DFS.
//The third option is to use Divide and Conqure through Quick Sort or Merge Sort



const getTreeHeight = (root) => {
    let height = 0;
    while(root.left !== null) {
      height++;
      root = root.left;
    }
    
    return height;
  }
  
  const nodeExists = (idxToFind, height, node) => {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;
    
    while(count < height) {
      const midOfNode = Math.ceil((left + right) / 2);
      
      if(idxToFind >= midOfNode) {
        node = node.right;
        left = midOfNode;
      } else {
        node = node.left;
        right = midOfNode - 1;
      }
      
      count++;
    }
    
    return node !== null;
  }
  
  const countNodes = (root) => {

    //return 0 if our root is null
    if(!root) return 0;
    
    //find the height of our tree
    const height = getTreeHeight(root);
    
    //if we have a height of zero that means we only have one level containing our root node: therefore we return 1.
    //we zero index because to find the number of nodes at each level we do 2 to the exponent and the first level is 2 to the exponent zero.
    if(height === 0) return 1;
    
    //in order to calculate the number of nodes in the tree excluding our bottom level, the formula is 2 to the exponent h (height of the tree) minus 1
    const upperCount = Math.pow(2, height) - 1
    
    //start our binary search by assigning our left and right values
    let left = 0, right = upperCount;
    
    //using <= means that we will find the point left and right over lap but we only want to find a value that exists therefore only use <
    while(left < right) {
        //we find our mid point by rounding up  in this case becase---
      const idxToFind = Math.ceil((left + right) / 2);
      //we know that all nodes on the bottom level must be pushed to the left -->
      //therefore we can assume if the node exists (is not null) we need to move our boundry to the right side -->
      //if it is null that means are too far right and should move our boundry to the left
      //we continue looping until we have found our right most non null node
      if(nodeExists(idxToFind, height, root)) {
          //then left is equal to "idxToFind" (our mid point)
        left = idxToFind;
      } else {
          //if not right is equal to idxToFind minus 1
        right = idxToFind - 1;
      }
      //continue looping until our "left" pointer becomes our right most non null node
    }
    //our final number of nodes is equal to the upper count plus 
    return upperCount + left + 1;
  };