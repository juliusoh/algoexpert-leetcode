

function bfs(graph, root) {
    const nodesLen = {};
    // set every node length to infinity to start
    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }

    nodesLen[root] = 0;
    const queue = [root];
    let current;

    while (queue.length) {
        current = queue.shift();
        const curConnected = graph[current];
        const neighborIndices = [];
        // get indices of connected nodes.
        // 1 represents connected nodes
        let idx = curConnected.indexOf(1);

        // index found
        while (idx !== -1) {
            neighborIndices.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (let j = 0; j < neighborIndices.length; j++) {
            const foundIndex = neighborIndices[j];
            console.log(foundIndex);
            if (nodesLen[foundIndex] === Infinity) {                
                nodesLen[foundIndex] = nodesLen[current] + 1;
                queue.push(foundIndex); 
            }
        }
    }

    return nodesLen;
}

const graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

// how close nodes are to the root
console.log(bfs(graph, 1))