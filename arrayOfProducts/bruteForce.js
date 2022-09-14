function arrayOfProducts(array) {
  // Write your code here.
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let runningProduct = 1;
    for (let j = 0; j < array.length; j++) {
      console.log("i:", i, "j", j);
      if (i !== j) {
        runningProduct *= array[j];
      }
      newArray[i] = runningProduct;
    }
  }
  console.log(newArray);
  return newArray;
}

arrayOfProducts([5, 1, 4, 2]);
