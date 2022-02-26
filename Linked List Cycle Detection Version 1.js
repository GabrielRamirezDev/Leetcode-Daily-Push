//Linked List Cycle Detection


//QUESTIONS:

//TEST CASE CONSIDERATIONS:

//Time Complexity: O(n) we loop through only once. In a set you can assume .add and .has are O(1) operations
//Space Complexity: O(n) set grows as we iterate through the length of the linked list


const findCycle = (head) => {

    //base case to return null if we receive a null input
    if(head === null)return false;
    let currentNode = head;
    const seenNodes = new Set();

    //we will continue to increment until our code detects our Set already contains the currentNode.
    //because we increment at the end of our while loop we end on the start of the cycle
    while(!seenNodes.has(currentNode)){
        seenNodes.add(currentNode)
        currentNode = currentNode.next;
    }
    //return the head of the cycle
    return currentNode;
}