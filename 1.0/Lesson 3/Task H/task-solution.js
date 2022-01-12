angryPigs = (data) => {
    let n = +data[0],
        set = new Set();

    for (let i = 1; i <= n; i++)
        set.add(+data[i].trim().split(' ')[0]);


    return set.size;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = angryPigs(input);

fs.writeFileSync("output.txt", res.toString());