getMap = (data) => {
    let minesCount = +data[0].trim().split(' ')[2],
        n = +data[0].trim().split(' ')[0],
        m = +data[0].trim().split(' ')[1],
        minesIndexes = data.slice(1);
        map = new Array(n);

    for (let i = 0; i < n; i++) {
        map[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            map[i][j] = 0;
        }
    }

    for (let i = 0; i < minesCount; i++) {
        let tempMines = [];
        tempMines[0] = +minesIndexes[i].trim().split(' ')[0];
        tempMines[1] = +minesIndexes[i].trim().split(' ')[1];
        minesIndexes[i] = tempMines;
    }

    for (let i = 0; i < minesCount; i++) {
        let iIndex = minesIndexes[i][0]-1,
            jIndex = minesIndexes[i][1]-1;
        map[iIndex][jIndex] = '*';
        let startNIndex = minesIndexes[i][0] - 2,
            startMIndex = minesIndexes[i][1] - 2,
            endNIndex = minesIndexes[i][0],
            endMIndex = minesIndexes[i][1];

        if (startNIndex < 0) startNIndex = 0;
        if (startMIndex < 0) startMIndex = 0;
        if (endNIndex >= n) endNIndex = n - 1;
        if (endMIndex >= m) endMIndex = m - 1;
        for (let nPos = startNIndex; nPos <= endNIndex; nPos++){
            for (let mPos = startMIndex; mPos <= endMIndex; mPos++){
                if (map[nPos][mPos] !== '*') map[nPos][mPos]++;
            }
        }

    }

   let result = map[0].join(' ');

   for (let i = 1; i < n; i++){
       result += '\n' + map[i].join(' ');
   }

    return result;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getMap(input);

fs.writeFileSync("output.txt", res.toString());