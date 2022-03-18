//Validate Binary Search Tree


//QUESTIONS: What are our boundaries to determine validity? Can we receive duplicate values in the tree? If there are duplicate values is the tree valid? -->
//WHow do we deal with duplicate values if they are considered valid? (Put them to the left or to the right?) -->
//What happens if we receive null?(an empty tree as well as single values are usually considered valid)

//TEST CASE CONSIDERATIONS:


//Given the root of a binary tree, determine if it is a valid binary search tree (BST).

//A valid BST is defined as follows:

//The left subtree of a node contains only nodes with keys less than the node's key.
//The right subtree of a node contains only nodes with keys greater than the node's key.
//Both the left and right subtrees must also be binary search trees.

//Time Complexity: O(n) because we will touch every node on the tree
//Space Complexity: O(n) because our recursion stack will be the size of the entire tree


const dfs = (node, min, max) => {

    //if the node value in question is less than or equal to the minimum value or greater than or equal to the max -->
    //that means our tree is not valid and we return false
    if(node.val <= min || node.val >= max) {
      return false;
    }
    
    //if node.left exists and if we fail at any point in our recursion return false
    if(node.left) {
      if(!dfs(node.left, min, node.val)){
        return false;
      };
    }
    //if node.right exists and if we fail at any point in our recursion return false
    if(node.right) {
      if(!dfs(node.right, node.val, max)) {
        return false;
      }
    }
    //if we do not receive false at any point during our recursion then we know our tree must be valid and return true
    return true;
}

const isValidBST = (root) => {
    //if we receive null that counts as a valid binary tree, thus we return true
    if(!root) return true;
    //call our recursive dfs function starting from the top of our tree with the root and checking it against -Infinity and Infinity
    return dfs(root, -Infinity, Infinity);
};