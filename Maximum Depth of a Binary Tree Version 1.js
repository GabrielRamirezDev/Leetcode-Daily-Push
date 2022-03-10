//Maximum Depth of Binary Tree

//QUESTIONS:What do we return if the tree is empty?

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) because worst case we travel to every node in the tree before finding the max depth
//Space Complexity O(n) because the size of the call stack AKA how many times we recursively call our function -->
//at worst that would be once on every node in the tree

const maxDepth = (node, currentDepth ) => {

    //once our node has a null value return the current max depth
    if(!node)return currentDepth;
    //if we don't hit null continue to increment the count with each node
    currentDepth++
    //recursively call the funciton on the left and right sides of each node until our original funciton call retursn the true max depth
    return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
}