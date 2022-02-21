function twoNumberSum(array, targetSum) {
    const nums = new Map();
    for (const num of array) {
      const potentialMatch = targetSum - num;
      if (nums.has(potentialMatch)) {
        return [potentialMatch, num];
      } else {
        nums.set(num)
      }
    }
      return []
  }

  twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6])