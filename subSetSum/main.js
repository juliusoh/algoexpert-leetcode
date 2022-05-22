function main(array) {
  if (array.length < 0) {
    return
  } else if (array.length === 0) {
    return array[0]
  }
  let maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1])
  for (let i = 2; i < array.length; i++) {
    const compute1 = maxSums[i - 1];
    const compute2 = maxSums[i - 2] + array[i]
    maxSums[i] = Math.max(compute1, compute2)
  }
  return maxSums[maxSums.length - 1];
}

const array = [75, 105, 120, 75, 90, 135]
main(array);