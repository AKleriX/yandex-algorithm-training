getGenNumbers = (data) => {
    let set1 = new Set(data[0].trim().split(' ')),
        set2 = new Set(data[1].trim().split(' ')),
        intersection = Array.from(new Set([...set1]
            .filter(item => set2.has(item))))
            .sort((a,b) => a-b);



    return intersection.join(' ');
}


const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getGenNumbers(input);

fs.writeFileSync("output.txt", res.toString());