function selectionSort(array) {
    let currentIndex = 0;
    while (currentIndex < array.length - 1) {
        let smallestIndex = currentIndex;
        for (let i = currentIndex + 1; i < array.length; i++) {
            if (array[smallestIndex] > array[i]) {
                smallestIndex = i;
            }
            [array[currentIndex], array[smallestIndex] = array[smallestIndex], array[currentIndex]]
            currentIndex++;
        }
    }
    return array;
}

selectionSort([8, 5, 2, 9, 5, 6, 3])