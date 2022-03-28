//Combinations

var combine = function(n, k) {
    const combinations = [];
    
    const build = (arr, index) => {
        if (arr.length === k) return combinations.push(arr.slice());
        
        for (let i = index; i <= n; i++) {
            arr.push(i);
            build(arr, i + 1);
            arr.pop();
        }
    };
    
    build([], 1);
    
    return combinations;
};