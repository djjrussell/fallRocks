const input =
`+----+
|. . |
|. . |
| .T.|
|. . |
|   .|
+----+`
const expectedOutput =
`+----+
|    |
|  : |
|  T |
|.   |
|:..:|
+----+`

const ROCK = "."
const STACK = ":"
const SPACE = " "

const lineList = input.split("\n")

const parseMap = (lineList) => {
    const output = []
    for (let i = 0; i < lineList.length; i++) {
        let line = lineList[i];
        let row = [];
        for (let x = 0; x < line.length; x++) {
            let letter = line[x];
            row.push(letter)
        }
        output.push(row);
    }
    return output;
}

const iterate = (grid) => {
    for (let y = grid.length - 2; y >= 1; y--) {
        for (let x = grid[y].length - 2; x >= 1; x--) {
            const below = grid[y+1][x]
            const current = grid[y][x]
            if (current === ROCK) {
                if (below === SPACE) {
                    grid[y+1][x] = current;
                    grid[y][x] = SPACE
                } else if (below === ROCK) {
                    grid[y+1][x] = STACK;
                    grid[y][x] = SPACE
                }
            }
        }
    }
    return grid;
}

const gridToString = (grid) => {
    let output = [];
    for( let i = 0; i < grid.length; i ++) {
        const row = grid[i];
        output.push(row.join(''))
    }
    return output.join('\n');
}

const run = (grid) => {
    let steps = 0;
    console.log(gridToString(grid));
    while(gridToString(grid) !== expectedOutput ) {
        const stringToPrint = gridToString(iterate(grid))
        console.log(stringToPrint);
        steps++
    }
}

const grid = parseMap(lineList);
run(grid);
