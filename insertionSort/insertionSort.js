function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
          let j = i;
          while (j > 0 && array[j] < array[j - 1]) {
            //   5, 8 = 8, 5
            // array[1], array[0]  = array[0], array[1]
              [array[j], array[j - 1]] = [array[j - 1], array[j]];
              j -= 1
          }
      }
      return array;
  }
  
insertionSort([8, 5, 2, 9, 5, 6, 3])