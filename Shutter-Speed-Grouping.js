let arr = [1, 2, 3, 10, 12, 25, 50, 51, 100, 101, 150];
let threshold = 10;

function photoAlbum(arr, threshold) {
  let finalArray = [];
  let tempArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] <= threshold) {
      tempArray.push(arr[i]);
    } else if (
      arr[i + 1] - arr[i] >= threshold &&
      arr[i] - arr[i - 1] <= threshold
    ) {
      tempArray.push(arr[i]);
      finalArray.push(tempArray);
      tempArray = [];
    } else {
      if (tempArray.length === 0) {
        continue;
      } else {
        finalArray.push(tempArray);
        tempArray = [];
      }
    }
  }
  return finalArray;
}

console.log(photoAlbum(arr, threshold));

/* 
Given sorted array of integers, return array of arrays grouped with neighbors less than or equal to the threshold. If singular item with no pairs within threshold then discard.

Input: [1, 2, 3, 10, 12, 25, 50, 51, 100, 101, 150], 10
Outpu: [[1, 2, 3, 10, 12], [50, 51], [101, 101]]

*/
