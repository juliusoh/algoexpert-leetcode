

const recurse = (arr, search, start, end) => {
    if (start > end) {
        return false;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        return true;
    }

    if (arr[mid] > x) {
        return recurse(arr, x, start, mid - 1);
    } else {
        return recurse(arr, x, mid + 1, end);
    }
};





let arr = [1, 3, 4, 7, 8, 9];
let search = 5;

recurse(arr, search, 0, arr.length - 1);