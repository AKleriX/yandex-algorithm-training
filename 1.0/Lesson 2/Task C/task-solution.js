getNearNumber = (data) => {
    let countNumbers = +data[0],
        numbers = data[1].toString().trim().split(' '),
        n = +data[2],
        minCounter = Math.abs(+numbers[0] - n),
        indexMin = 0;


    for (let i = 1; i < countNumbers; i++){
        if (minCounter > Math.abs(+numbers[i] - n)) {
            minCounter =  Math.abs(+numbers[i] - n);
            indexMin = i;
        }
    }

    return +numbers[indexMin];
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getNearNumber(input);

fs.writeFileSync("output.txt", res.toString());