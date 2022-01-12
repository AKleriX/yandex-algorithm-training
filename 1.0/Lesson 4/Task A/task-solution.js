getSynonym = (data) => {
    let n = +data[0],
        dic = new Map(),
        foundWord = data[n+1].trim();

    for (let i = 1; i <= n; i++){
        dic.set(data[i].trim().split(' ')[0], data[i].trim().split(' ')[1]);
        dic.set(data[i].trim().split(' ')[1], data[i].trim().split(' ')[0]);
    }

    return dic.get(foundWord);
}



const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const input = fileContent
    .toString()
    .trim()
    .split('\n');

let res = getSynonym(input);

fs.writeFileSync("output.txt", res.toString());