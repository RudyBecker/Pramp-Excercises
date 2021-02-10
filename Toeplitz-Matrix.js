let arr = [[1,2,3,4],[5,1,2,3],[6,5,1,2]]
//  let arr = [[1,2,3,4],[5,1,9,3],[6,5,1,2]]

// More Concise

// function isToeplitz(arr) {
//   let nextNumber;
//   for (let r = 0; r < arr.length - 1; r ++ ) { //2
//     for (let c =0; c < arr[0].length - 1; c++) { //3
//       currentNumber = arr[r][c]
//       nextNumber = arr[r + 1][c + 1]
//       if (currentNumber !==  nextNumber && nextNumber !== undefined) {
//         return false
//       }
//     }
//   }
//   return true
// }

// let result = (isToeplitz(arr))

// console.log(result)

//Less Concise

function isToeplitz(arr) {
  let height = arr.length;
  let width = arr[0].length;
  for (let i = 0; i < width; i++) {
      const chosenNumber = arr[0][i];
      let currentRow = 0;
      let currentColumn = i;
    while (currentRow < height && currentColumn < width) {
        if (arr[currentRow][currentColumn] !== chosenNumber) return false; 
        currentRow ++
        currentColumn ++ 
    }
  }

  for (let i = 1; i<height; i++) {
      const chosenNumber = arr[i][0];
      let currentRow = i;
      let currentColumn = 0;
      while(currentRow < height && currentColumn<width) {
        if (arr[currentRow][currentColumn] !== chosenNumber) return false;
        currentRow++
        currentColumn ++
      }
  }
  return true
}

//Time: O (R*C)
//Space: 0(1)
let result = (isToeplitz(arr))

console.log(result)
