// Right Side View of Tree- DFS Version (THIS VERSION IS BETTER IF YOU KNOW YOU ARE GETTING A FULL COMPLETE TREE)

//QUESTIONS: What if we get an empty input?

//TEST CASE CONSIDERATIONS: Unobstructed nodes on the left side of the tree (you can see nodes on the left side if they are not blocked by the right side of the tree). -->
//"standing" is the key word in this question.

//Time Complexity o(n) worst case we end up exploring the whole tree
//Space Complexity: o(n)worst case we end up exploring the whole tree which means the size of our recursion stack would also be o(n)

const dfs = (node, currentLevel, result) => {
    if(!node) return;
    if(currentLevel >= result.length) {
      result.push(node.val);
    }
  
    if(node.right) {
      dfs(node.right, currentLevel + 1, result);
    }
    
    if(node.left) {
      dfs(node.left, currentLevel + 1, result);
    }
  };

  const rightSideViewDFS = (root) => {
    const result = [];
    dfs(root, 0, result);
    return result;
  };