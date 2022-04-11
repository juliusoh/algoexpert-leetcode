function threeNumbersum(array, targetSum) {
// sort array
// left and right pointer (0 + 1, end)
// currentSum = currentNumber[o] + left pointer value + right pointer value 
// is currentSum === targetSum ?, append to final array
// O(n^2) n is length of input array
array.sort((a,b) => a - b);
console.log(array)
const triplets = [];

for (let i = 0; i < (array.length - 2); i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
        const currentSum = array[i] + array[leftPointer] + array[rightPointer];
        if (currentSum === targetSum) {
            triplets.push([array[i], array[leftPointer], array[rightPointer]])
            leftPointer += 1
            rightPointer -= 1
        } else if (currentSum < targetSum) {
            leftPointer += 1
        } else if (currentSum > targetSum) {
            rightPointer -= 1
        }
     }
}
return triplets
}

threeNumbersum([12,3,1,2,-6,5,-8,6], 0)
