getDifferentNumbers = (data) => {
    return Array.from(new Set(data.map(Number))).length;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(' ');

let res = getDifferentNumbers(input);

fs.writeFileSync("output.txt", res.toString());