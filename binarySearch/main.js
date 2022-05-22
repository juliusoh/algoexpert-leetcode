function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return false;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33);
