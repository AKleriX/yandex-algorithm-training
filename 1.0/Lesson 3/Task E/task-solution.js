getKeys = (data) => {
    let set2 = new Set(data[1]),
        set1 = new Set(data[0].trim().split(' '));

    return [...set2].filter(item => !set1.has(item)).length;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getKeys(input);

fs.writeFileSync("output.txt", res.toString());