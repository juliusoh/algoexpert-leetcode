function firstDuplicateValue(array) {
  const hashTable = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value in hashTable) {
      return array[i];
    } else {
      hashTable[array[i]] = true;
    }
  }
}

// console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
//   firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]);
console.log(firstDuplicateValue([2, 5, 1, 4, 1]));

