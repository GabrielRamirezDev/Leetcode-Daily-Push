//Create an associative array of values (Merge two arrays into groupings of sub arrays by index)

const a = [1, 2, 3, 4],
      b = [34, 54, 54, 43]

console.log(
  a.map((e,i) => [e,b[i]])
)
//Result: [ [1, 34],[2,54],[3,54],[4,43] ]