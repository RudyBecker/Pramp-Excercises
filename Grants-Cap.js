//AWARD BUDGET CUTS

let grantsArray = [2, 100, 50, 130, 1000];
let newBudget = 190;

function findGrantsCap(grantsArray, newBudget) {
  // set n to amount of grants
  let n = grantsArray.length;
  //#sort the array in descending order
  let sortedArray = grantsArray.sort((a, b) => b - a);
  //#pad the array with a zero at the end to cover the case where 0 <= cap <=grantsArray[i]
  let newArray = sortedArray.push(0);

  //   calculate the total amount we need to cut back to meet the reduced budget
  let surplus = sortedArray.reduce((a, b) => a + b, 0) - newBudget;
  console.log("Surplus:", surplus);

  //if there is nothing to cut, simply return the highest grant as the cap. Recall that the grants array is sorted in a descending order, so the highest grant is positioned at index 0

  if (surplus <= 0) {
    return grantsArray[0];
  }
  // [1000,130,100,50,2,0]
  let i = 0;
  while (i <= n - 1) {
    surplus -= (i + 1) * (sortedArray[i] - sortedArray[i + 1]);

    console.log("in for loop, surplus=", surplus);
    if (surplus <= 0) {
      break;
    }
    i++;
  }
  return sortedArray[i + 1] + Math.abs(-surplus / (i + 1));


  //   console.log(surplus);
}
console.log(findGrantsCap(grantsArray, newBudget));
