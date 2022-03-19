//Code a Priority Queue Heap

//QUESTIONS:

//TEST CASE CONSIDERATIONS:

//Time Complexity
//Space Complexity

class PriorityQueue {

    //creates a function that does our comparisons
    //for a max heap, if we need a min heap use a < b
    constructor(comparator = (a, b) => a > b) {
      this._heap = [];
      this._comparator = comparator;
    }

    //returns the number of nodes in our heap
    size() {
      return this._heap.length;
    }
    //lets us return the root value in our heap
    peek() {
      return this._heap[0];
    }
    //returns a boolean indicating whether or not our heap is empty
    //if we were to ever change how we are storing the heap in our priority queue that means there are more places -->
    //we would need to adjust our code
    //thus we use our previously defined size method
    //if size() is equal to = we return true, if not we return false.
    isEmpty() {
      return this._heap.length === 0;
    }

    //private method that uses the mathematical equation used to find the parent of a node and returns the index of that parent
    _parent(idx) {
      return Math.floor((idx - 1) / 2);
    }

    //private method that uses the mathematical equation used to find the left child of a node and returns the index of that node
    _leftChild(idx) {
      return idx * 2 + 1;
    }

    //private method that uses the mathematical equation used to find the right child of a node and returns the index of that node
    _rightChild(idx) {
      return idx * 2 + 2;
    }

    //private method that swaps the values i and j in our heap
    _swap(i, j) {
      [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    //private method that uses the compare function from our constructor on indexes i and j in our heap
    _compare(i, j) {
      return this._comparator(this._heap[i], this._heap[j]);
    }

    //adds a new value to our heap
    push(value) {
        //adds a new value to the end of our heap array
        this._heap.push(value);

        //our method that sifts up the new value at the end of our heap array to its highest possible position
        this._siftUp();
        //return the new size of the array
        return this.size();
    }
  
    //sifts a new value from the back of the heap to its highest possile position
    //performs in o(logN) time
    _siftUp() {
        //assumes the new value is always at the end of the array
        //for that reason the index is the length of our heap minus 1 for zero indexing
      let nodeIdx = this.size() - 1;

      //while we have not yet reached the root and while the node value is greater than its parent -->
      while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
          //...swap the values
        this._swap(nodeIdx, this._parent(nodeIdx));
        //update the value of the pointer keeping track of our new value index
        nodeIdx = this._parent(nodeIdx);
      }
    }

    //removes the root value from the heap
    //using shift() to remove our root from the front of the array is too slow at o(n) time
     //instead we swap the first and last values of our heap and then us pop() to remove the root
    pop() {
        //if there is more than one element in our heap then swap the first and last items
      if (this.size() > 1) {
        this._swap(0, this.size() - 1);
      }

      //pop off the previous root from the heap and store it in a new variable
      const poppedValue = this._heap.pop();
      //sifts down the value that was swapped with the previous root to its propper place
      this._siftDown();

      //return the popped off root
      return poppedValue;
    }
    //sifts down the value that was swapped with the previous root to its propper place
    //performs in o(logN) time
    _siftDown() {
        //initilizes a variable to keep track of the swapped values index
      let nodeIdx = 0;

      //while the index of the left child is less than the size of the heap and the left child value is greater/smaller than our swapped value-->
      //..OR the index of the right child is less than the size of the heap and the right child value is greater/smaller than our swapped value -->
      while (
        (this._leftChild(nodeIdx) < this.size() &&
          this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
        (this._rightChild(nodeIdx) < this.size() &&
          this._compare(this._rightChild(nodeIdx), nodeIdx))
      ) {
          //... if the right child node is less than the size of our heap AND the right child is greater/smaller than the left child -->
          //...then we store the right child value if not then we store the left child value 
        const greaterChildIdx =
        //if the right child exists we know the left child exists
        //if the right child doesn't exist we default to picking the left child
          this._rightChild(nodeIdx) < this.size() &&
          this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
            ? this._rightChild(nodeIdx)
            : this._leftChild(nodeIdx);

            //swap the newly stored greater/smaller node with the node we are sifting down and update the value of nodeIdx to reflect its new position
        this._swap(greaterChildIdx, nodeIdx);
        nodeIdx = greaterChildIdx;
      }
    }
  }