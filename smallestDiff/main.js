function smallestDiff(one, two) {
    one.sort((a, b) => a - b)
    two.sort((a, b) => a - b)
    let indexOne = 0;
    let indexTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
    while(indexOne < one.length && indexTwo < two.length) {
        const firstNum = one[indexOne];
        const secondNum = two[indexTwo];
        if (firstNum < secondNum) {
            current = secondNum - firstNum
            indexOne++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            indexTwo++;
        } else {
            return [firstNum, secondNum]
        }
        if (smallest > current) {
            smallest = current
            smallestPair = [firstNum, secondNum]
        }
    }
    console.log(smallestPair)
    return smallestPair
}

smallestDiff([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17])