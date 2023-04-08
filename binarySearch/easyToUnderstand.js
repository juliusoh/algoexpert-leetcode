function binarySearch(array, target) {
  let left = 0;
  let right = array.length;
  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
    const middleValue = array[middleIndex];
    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
