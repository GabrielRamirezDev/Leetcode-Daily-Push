//Reverse section of Linked List (M, N Reversal)

//Time Complexity: O(n)
//Space Complexity: O(1) because nothing scales, only static pointers

const subsectionReveral = (head, m, n) => {

    //acts as our pointer and starts at 1 as we start with our head which is in the first position
    let currentPos = 1;

    let currentNode = head;

    //will act as our m - 1 but is initialized with at the head
  let start = head;
  
    //once our current position is equal to m, we know it is at the start of the sub section of nodes we need to reverse
  while(currentPos < m) {
    //Each time current is set to the next node and start is set to the old version of current.
    //AKA current will eventually become m and start will become m - 1
    start = currentNode;
    currentNode = currentNode.next;
    //currentPosition keeps track of current's position
    currentPos++;
  }
  //represents the list so far
  let newList = null
  //is equal to our current because current holds the start of the sub section which should become the tail after reversal
  let tail = currentNode;

  //our reversal code should only run while currentPosition is within the bounds of our subsection established by m and n
  while(currentPos >= m && currentPos <= n) {
    //is the same as a normal linked list reversal
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;

    //continue to increment our pointer
    currentPos++;
  }

  //new list is now the head of the reversed list
  start.next = newList;
  tail.next = currentNode;
  
  if(m > 1) {
    return head
  } else {
    return newList;
  }
}