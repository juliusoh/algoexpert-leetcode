// node vertex = single value
// edge = connetion between 2 nodes
// ex User is a node
// user a -> user b
// directed graph = one way
// facebook, friendships, undirected graph both ways
// weighted graphs = edges have meanings (distances between 2 airports)

// DFS -> first child first child. no more children backtrack to past node reciusrive
// BFS -> add all direct childrens toa queue and grandchildren to a queue

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
]

let fuckYou = new Map();

function addNode(airport) {
    fuckYou.set(airport, [])
}

function addEdge(origin, destination) {
    fuckYou.get(origin).push(destination)
    fuckYou.get(destination).push(origin)
}

// create graph

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(fuckYou)

// BFS

function bfs(start) {

    const visited = new Set()
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift();

        const destinations = fuckYou.get(airport);

        for (const destination of destinations) {
            if (destination === "BKK") {
                console.log('found it')
            }

            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
    }


}

bfs('PHX')

function dfs(start, visited = new Set()) {
    console.log('fuckYou', fuckYou)
    console.log(start);

    visited.add(start);

    const destinations = fuckYou.get(start)

    for (const destination of destinations) {
        if (destination === "BKK") {
            console.log('FOUND BKK')
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited)
        }
    }
}

// dfs('PHX')

// BOTH BFS AND DFS IS O(V+E)
// NODES + EDGES TOTAL NUMBER SCALE O(N) based on NODES AND EDGES