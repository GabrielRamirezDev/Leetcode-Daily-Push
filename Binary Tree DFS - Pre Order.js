//Depth First Search: Pre Order

const traversePreOrder = (node, list) => {

    //push the node value onto list
    list.push(node.value)

    //if the node has a left child, travel down
    if(node.left){
        //recursively call this to travel all the way down.
        traversePreOrder(node.left, list);
    }

    //if the node has a right child, travel down
    if(node.right){
        //recursively call this to travel all the way down.
        traversePreOrder(node.right, list);
    }
    return list;
}