getSequence = (data) => {
    let readSeq = data[1].trim().split(' ');

    for (let i = 0; i < readSeq.length; i++){
        if (isPalendrom(readSeq.slice(i, readSeq.length))) {
            let addString = readSeq.slice(0, i).reverse();
            return addString.length + '\n' + addString.join(' ');
        }
    }

    return 0;
}

isPalendrom = (string) => {
    let revString = string.slice(0).reverse();

    return revString.toString().trim() === string.toString().trim();
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getSequence(input);

fs.writeFileSync("output.txt", res.toString());