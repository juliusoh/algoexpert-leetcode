function twoNumberSum(array, targetSum) {
    const hashMap = {};
      for (let i = 0; i < array.length; i++) {
          const currentVal = array[i];
          const targetValue = targetSum - currentVal;
          if (targetValue in hashMap) {
              return [targetValue, currentVal]
          } else {
              hashMap[currentVal] = true
          }
      }
      return []
  }

  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))