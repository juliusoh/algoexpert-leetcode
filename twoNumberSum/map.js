function twoNumberSum(array, targetSum) {
  const nums = new Map();
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (nums.has(potentialMatch)) {
      console.log([potentialMatch, num]);
      return [potentialMatch, num];
    } else {
      nums.set(num);
    }
  }
  return [];
  }

  twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);