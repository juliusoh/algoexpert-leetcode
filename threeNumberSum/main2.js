const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

// Find all triplets in the array
// Sum up to the target sum, return nested array
function threeNumberSum(array, targetSum) {
  // sort the array.
  array.sort((a, b) => a - b);
  const triplets = [];
  // -2 = we always want 3 numbers, third value from end of array
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      const currentSum = array[i] + array[leftPointer] + array[rightPointer];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer += 1;
        rightPointer -= 1;
      } else if (currentSum < targetSum) {
        leftPointer += 1;
      } else {
        rightPointer -= 1;
      }
    }
  }
  return triplets;
}

threeNumberSum(array, targetSum)