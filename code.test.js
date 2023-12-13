const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

dm = [[]];
assert(kruskalAlgo(dm) == 0);

dm = [[0]];
assert(kruskalAlgo(dm) == 0);

dm = [
	[0, 10, 6, 5],
	[10, 0, 0, 15],
	[6, 0, 0, 4],
	[5, 15, 4, 0]
]
assert(kruskalAlgo(dm) == 19);

dm = [
    [0, 2, 0, 6],
    [2, 0, 3, 8],
    [0, 3, 0, 0],
    [6, 8, 0, 0]
];

assert(kruskalAlgo(dm) == 11);

dm = [
    [0, 4, 6, 0, 0, 0],
    [4, 0, 5, 1, 0, 0],
    [6, 5, 0, 0, 3, 0],
    [0, 1, 0, 0, 2, 7],
    [0, 0, 3, 2, 0, 8],
    [0, 0, 0, 7, 8, 0]
];

assert(kruskalAlgo(dm) == 17);
