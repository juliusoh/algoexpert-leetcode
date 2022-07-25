const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 5;

// O(n + m) time
// O(1) space
function searchMatrix(matrix, target) {
    if (matrix === null || matrix.length < 1 || matrix[0].length < 1) {
        return false;
    }

    let col = matrix[0].length - 1;
    let row = 0;
    while (col >= 0 && row <= matrix.length - 1) {
        const WTF = matrix[row][col]
        if (target === WTF) {
            return true;
        } else if (target < WTF) {
            col--;
        } else if (target > WTF) {
            row++;
        }
    }
    return false;
}

searchMatrix(matrix, target);
// O(N^2)
// O(1)
function bruteForce(matrix, target) {
    for (let i in matrix) {
        for (let j in matrix[i]) {
            if(target === matrix[i][j]) {
                return true;
            }
        }
    }
    return false
}
const result = bruteForce(matrix, target)
console.log(result)