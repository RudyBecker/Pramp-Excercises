let arrayOne = [2, 4, 6, 8, 10];
let arrayTwo = [4, 6, 7, 8, true, "string"];

function findDupes(arrayOne, arrayTwo) {
  let filteredArrayOne = new Set(arrayOne);
  let finalArray = arrayTwo.filter((n) => filteredArrayOne.has(n));
  return finalArray;
}

console.log(findDupes(arrayOne, arrayTwo)) ;
