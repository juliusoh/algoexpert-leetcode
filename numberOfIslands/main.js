const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const dfs = (grid, i , j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== "1") {
        return;
    }
    grid[i][j] = "2";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}

const numIslands = (grid) => {
    if (!grid) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const stupid = grid[i][j]
            if (stupid === "1") {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    console.log(count)
    return count;
};

numIslands(grid);