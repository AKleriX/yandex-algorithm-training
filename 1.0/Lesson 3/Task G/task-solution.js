getHonestTurtles = (data) => {
    let n = +data[0],
        set = new Set();

    for (let i = 1; i <= n; i++) {
        if (((+data[i].trim().split(' ')[0] + +data[i].trim().split(' ')[1]) === (n - 1)) &&
            (+data[i].trim().split(' ')[0] >= 0 && +data[i].trim().split(' ')[1] >= 0))
            set.add(data[i]);
    }
    return set.size;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getHonestTurtles(input);

fs.writeFileSync("output.txt", res.toString());