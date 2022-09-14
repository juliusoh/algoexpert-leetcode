function moveElementToEnd(array, toMove) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
      while (i < j && array[j] === toMove) {
        j -= 1
      }
      if (array[i] === toMove) {
        [array[i], array[j]] = [array[j], array[i]]
        console.log(array)
      }
      i += 1
    }
    return array;
}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)