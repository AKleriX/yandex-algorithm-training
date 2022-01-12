getHeight = (data) => {
    let blocksCount = +data[0],
        dicBlocks = new Map();

    for (let i = 1; i < blocksCount + 1; i++) {
        if (!dicBlocks.has(data[i].trim().split(' ')[0]) ||
            (+dicBlocks.get(data[i].trim().split(' ')[0]) < +data[i].trim().split(' ')[1]))
            dicBlocks.set(data[i].trim().split(' ')[0], +data[i].trim().split(' ')[1]);

    }

    let wBlocks = Array.from(dicBlocks.keys()).map(Number).sort((a, b) => b-a),
        hResult = 0;

    console.log(wBlocks);

    for (let i = 0; i < wBlocks.length; i++)
        hResult += +dicBlocks.get(wBlocks[i].toString());

    return hResult;
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getHeight(input);

fs.writeFileSync("output.txt", res.toString());