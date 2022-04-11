function nonConstructibleChange(coins) {
    coins = coins.sort((a, b) => a - b); // O(nlogn) time operation
    console.log(coins)
    let change = 0;

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i]
        if (coin > change + 1) return change + 1;
        change += coin;
    }

    return change + 1;
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])