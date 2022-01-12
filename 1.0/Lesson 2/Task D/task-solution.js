getGrowNumberCount = (data) => {
    let counter = 0;

    for (let i = 1; i < (data.length - 1); i++) {
        if (+data[i] > +data[i - 1] && + data[i] > +data[i + 1])
            counter++;
    }

    return counter;
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(' ');

let res = getGrowNumberCount(input);

fs.writeFileSync("output.txt", res.toString());