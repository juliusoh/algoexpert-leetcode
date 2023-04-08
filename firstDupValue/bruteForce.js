function firstDuplicateValue(array) {
  // Write your code here.
  let minSecondIndex = array.length;
  for (let i = 0; i < array.length - 1; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length - 1; j++) {
      const valueToCompare = array[j];
      console.log("i", i, "value", value, "j", j, "valueToCompare", valueToCompare);
      if (value === valueToCompare) {
        minSecondIndex = Math.min(minSecondIndex, j);
      }
    }
  }

  if (minSecondIndex === array.length) {
    return -1;
  }
  console.log(array[minSecondIndex]);
  return array[minSecondIndex];
}

firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]);
firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]);
