// mergeArrays
// params => two arrays
// return new array with all elements of two arrays
// sorted in ascending order

function mergeArrays(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  const sortedArr3 = arr3.sort((a, b) => a - b);
  return sortedArr3;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
