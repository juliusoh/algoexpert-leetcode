const inputArr = [1, 1, 0, 0, 0, 1, 0];

function test(array) {
  let maxOneCount = 0;
  for (let i = 0; i < array.length; i++) {
    let oneCount = 0;
    for (let j = i; j < array.length; j++) {
        const value = array[j]
      if (value === 0) {
        oneCount++;
      } else {
        break;
      }
    }
    if (oneCount > maxOneCount) {
      maxOneCount = oneCount;
    }
  }
  console.log(maxOneCount);
  return maxOneCount;
}

test(inputArr);
