getWordsCount = (data) => {
    let set = new Set(data);

    set.delete('');

    return set.size;
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split(/\s+/);

let res = getWordsCount(input);

fs.writeFileSync("output.txt", res.toString());