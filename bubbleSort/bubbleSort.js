function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  // 	loop executes since isSorted is false
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

bubbleSort([8, 5, 2, 9, 5, 6, 3]);
