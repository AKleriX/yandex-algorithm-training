getGen = (data) => {
    let count = 0,
        pairs = new Set();   
    
    for (let i = 0; i < data[1].length - 1; i++)
        pairs.add(data[1].slice(i, i + 2));

    for (let i = 0; i < data[0].length - 1; i++) 
        if (pairs.has(data[0].slice(i, i + 2)))
            count++;    

    return count;
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getGen(input);

fs.writeFileSync("output.txt", res.toString());