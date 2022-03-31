//Verifying an Alien Dictionary

var isAlienSorted = function(words, order) {
let newMap = new Map();
for (let i = 0; i < order.length; i++) {
    newMap.set(order[i], i);
} 

for (let j = 1; j < words.length; j++) {
    let prev = words[j-1];
    let curr = words[j];
    
    if (newMap.get(prev[0]) > newMap.get(curr[0])) {
        return false;
    } else if (prev[0] === curr[0]) {
        let pointer = 1;
        while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
            pointer++;
        }
         if ((newMap.get(prev[pointer]) >= 0 && !newMap.get(curr[pointer])) || newMap.get(prev[pointer]) > newMap.get(curr[pointer])) {
             return false;
         }
    }
}
return true;
};