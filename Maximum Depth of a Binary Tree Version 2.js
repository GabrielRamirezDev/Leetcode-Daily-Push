//Maximum Depth of Binary Tree

//QUESTIONS:What do we return if the tree is empty?

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) because worst case we travel to every node in the tree before finding the max depth
//Space Complexity O(n) because the size of the call stack AKA how many times we recursively call our function -->
//at worst that would be once on every node in the tree

const maxDepth = (node) => {
    if(!node)return 0;
    
    return Math.max(maxDepth(node.left),maxDepth(node.right)) + 1;
}