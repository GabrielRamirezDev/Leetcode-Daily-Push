//Kth Largest Element: Default Sorting Method (Non Recursive)

const findKthLargest = (array, k) => {
    
    array = array.sort((a,b) => (a-b))
    const indexToFind = array.length - k;
        return array[indexToFind];
};
