// O(n) time | O(1) space
function monotonicArray(array) {
    if (array.length <= 2) {
        return true;
    }
    let direction = array[1] - array[0];
    for (let i = 2; i < array.length; i++) {
        if (direction === 0) {
            direction = array[i] - array[i - 1]
            continue;
        }
        if (breakDirection(direction, array[i - 1], array[i])) {
            return false;
        }
    }
    return true;
}

function breakDirection(direction, prevValue, currentValue) {
    const difference = currentValue - prevValue;
    if (direction > 0) {
        return difference < 0;
    }
    return difference > 0;
}

monotonicArray([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11])